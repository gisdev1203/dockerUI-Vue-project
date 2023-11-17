var express = require("express");
var router = express.Router();
const md5 = require("md5");
const db = require("../../config/database.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const { randomUUID } = require("crypto");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Make sure there is an Email and Password in the request
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    let user = [];

    var sql = "SELECT * FROM user WHERE email = ?";
    db.all(sql, email, function (err, rows) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      rows.forEach(function (row) {
        user.push(row);
      });

      var PHash = bcrypt.hashSync(password, user[0].Salt);

      if (PHash === user[0].password) {
        // * CREATE JWT TOKEN
        const token = jwt.sign(
          { user_id: user[0].Id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "1h", // 60s = 60 seconds - (60m = 60 minutes, 2h = 2 hours, 2d = 2 days)
          }
        );
        user[0].Token = token;
      } else {
        return res.status(400).send("No Match");
      }

      return res.status(200).json({
        message: "success",
        user,
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", (req, res, next) => {
  var sql = "select * from user";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

router.get("/:id", (req, res, next) => {
  var sql = "select * from user where id = ?";
  var params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

router.post("/register", async (req, res) => {
  var errors = [];
  try {
    const { name, email, password, role } = req.body;
    if (!email) {
      errors.push("Email is missing");
    }
    if (errors.length) {
      res.status(400).json({ error: errors.join(",") });
      return;
    }
    let userExists = false;

    var sql = "SELECT * FROM user WHERE email = ?";

    await db.all(sql, email, (err, result) => {
      if (err) {
        res.status(402).json({ error: err.message });
        return;
      }

      if (result.length === 0) {
        var salt = bcrypt.genSaltSync(10);

        var data = {
          name: name,
          email: email,
          password: bcrypt.hashSync(password, salt),
          Salt: salt,
          role: role,
        };
        var sql =
          "INSERT INTO user (name, email, password, Salt,role) VALUES (?,?,?,?,?)";
        var params = [
          data.name,
          data.email,
          data.password,
          data.Salt,
          data.role,
        ];
        var user = db.run(sql, params, function (err, innerResult) {
          if (err) {
            res.status(400).json({ error: err.message });
            return;
          }
        });
      } else {
        userExists = true;
        // res.status(404).send("User Already Exist. Please Login");
      }
    });

    setTimeout(() => {
      if (!userExists) {
        res.status(201).json("Success");
      } else {
        res.status(201).json("Record already exists. Please login");
      }
    }, 500);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:id", (req, res, next) => {
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? md5(req.body.password) : null,
  };
  db.run(
    `UPDATE user set 
           name = COALESCE(?,name), 
           email = COALESCE(?,email), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
    [data.name, data.email, data.password, req.params.id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

router.delete("/:id", (req, res, next) => {
  db.run(
    "DELETE FROM user WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    }
  );
});

router.post("/uploads", (req, res) => {
  const { name, email, password, role } = req.body;
  if (req?.files?.file) {
    const myFile = req?.files?.file;

    myFile.mv(`public/images/${myFile.name}`, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send({ msg: "Error occured" });
      }
    });
  }
  var salt = bcrypt.genSaltSync(10);
  var sql = "select * from user where email=?";

  db.all(sql, email, function (err, rows) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    var data = {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, salt),
      Salt: salt,
      role: role,
    };

    if (!rows.length) {
      if (req?.files?.file) {
        var sql =
          "INSERT INTO user (name,email,password,Salt, role, avatar) VALUES (?,?,?,?,?,?)";
        var params = [
          data.name,
          data.email,
          data.password,
          data.Salt,
          data.role,
          `/${req.files.file.name}`,
        ];
      } else {
        var sql =
          "INSERT INTO user (name,email,password,Salt, role, avatar) VALUES (?,?,?,?,?,?)";
        var params = [
          data.name,
          data.email,
          data.password,
          data.Salt,
          data.role,
        ];
      }
    } else {
      if (req?.files?.file) {
        if (password === undefined) {
          var sql =
            "UPDATE user SET name=?,Salt=?,role=?,avatar=? WHERE email=?";
          var params = [
            data.name,
            data.Salt,
            data.role,
            `/${req.files.file.name}`,
            data.email,
          ];
        } else {
          var sql =
            "UPDATE user SET name=?,password=?,Salt=?,role=?,avatar=? WHERE email=?";
          var params = [
            data.name,
            data.password,
            data.Salt,
            data.role,
            `/${req.files.file.name}`,
            data.email,
          ];
        }
      } else {
        if (password !== undefined) {
          var sql =
            "UPDATE user SET name=?,password=?,Salt=?,role=? WHERE email=?";
          var params = [
            data.name,
            data.password,
            data.Salt,
            data.role,
            data.email,
          ];
        } else {
          var sql = "UPDATE user SET name=?,Salt=?,role=? WHERE email=?";
          var params = [data.name, data.Salt, data.role, data.email];
        }
      }
    }
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  });
});
module.exports = router;
