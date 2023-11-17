var sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "db/database.sqlite";
var md5 = require("md5");
const bcrypt = require("bcryptjs");

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text UNIQUE, 
            password text, 
            Salt text,
            role text,
            avatar text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var salt = bcrypt.genSaltSync(10);
          var insert =
            "INSERT INTO user (name, email, password,Salt, role, avatar) VALUES (?,?,?,?,?,?)";
          db.run(insert, [
            "Admin",
            "admin@gmail.com",
            bcrypt.hashSync("admin123456", salt),
            salt,
            "admin",
          ]);
        }
      }
    );
  }
});

module.exports = db;
