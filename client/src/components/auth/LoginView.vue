<template>
    <div class="d-flex vh-100 justify-content-center align-items-center">
        <div class="p-2 flex-grow">
          <div class="smallContainer border shadow rounded">
            <div class="row g-0">
              <div class="col-sm-6 col-xs-12 d-none d-sm-block position-relative" id='leftCol'>
                <img src="../../assets/login.png" style="height: 60vh;" />
                <div id="pt-5 text-end w-100" class="position-absolute end-0 top-0">
                  <a href="#" class="customBtn activeBtn">Login</a><br />
                  <router-link to="/register" class="customBtn hov" style="color: white;" >Sign Up</router-link>
                </div>
       
              </div>
              <div class="col-sm-6 col-xs-12">
                <div class="d-flex flex-column" style="height:100%">  
                  <div class="my-auto p-5">
                    <div class="text-center">
                      <h2 class="h3 pb-3">LOGIN</h2>
                    </div>
                    <form @submit.prevent="submitForm" id="loginForm">
                      <div class="position-relative my-3 inputGroup text-center">
                        <span class="position-absolute mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg></span>
                        <input 
                          type="email" 
                          class="border-0 border-bottom w-100" 
                          placeholder="Enter ID" 
                          id="email"
                          v-model.trim="$v.email.$model"
                        />
                        <span class="error" v-if="!$v.email.required && $v.email.$error"
                          >Email is required</span
                        >
                        <span class="error" v-if="!$v.email.isUnique && $v.email.$error"
                          >Email is invalid</span
                        >
                      </div>
                      <div class="position-relative my-3 inputGroup text-center">
                        <span class="position-absolute mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
                          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                          <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                        </svg></span>
                        <input 
                          type="password" 
                          class="border-0 border-bottom w-100" 
                          placeholder="Password" 
                          id="password"
                          v-model.trim="$v.password.$model"
                        />
                        <span class="error" v-if="!$v.password.required && $v.password.$error"
                          >Password is required</span
                        >
                        <span class="error" v-if="!$v.password.minLength && $v.password.$error"
                          >Password must have atleast
                          {{ $v.password.$params.minLength.min }} letters</span
                        >
                        <span class="error" v-if="!$v.password.maxLength && $v.password.$error"
                          >Password must be of max length
                          {{ $v.password.$params.maxLength.max }} letters</span
                        >
                      </div>
                      <div class="d-flex align-items-center justify-content-between pt-2">
                        <a class="linkFlare" href="#"><small>Forgot Password?</small></a>
                        <button class="btn btn-accent px-4 rounded-pill" type="submit">LOGIN</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import './index.css'
import Vue from "vue";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { apiurl } from '../config/key.js'

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
      isUnique(value) {
        if (value === "") return true;
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailRegex.test(value);
      },
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(15),
    },
  },
  methods: {
    submitForm: async function() {
      this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) return;

      const loader = this.$loading.show({});
      const userLoginRequest = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post(`${apiurl}/login`, { ...userLoginRequest });
        if (response.data.message === 'success') {
          loader.hide();
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: response.data.user[0].name,
              email: response.data.user[0].email,
              role: response.data.user[0].role,
            })
          );
          console.log(response.data);
          localStorage.setItem("jwt", response.data.user[0].Token);
          if (localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn", true);
            Vue.$toast.open({
              message: "Login successful",
              type: "success",
              position: "top-right",
            });
            this.$router.push({ path: "/dashboard" });
          }
        }
      } catch (error) {
        Vue.$toast.open({
          message:
            error.response?.data?.error ||
            error.response?.data?.message ||
            error?.message,
          type: "error",
          position: "top-right",
        });
        loader.hide();
      }
    },
  },
};
</script>

<style scoped>
*{
  color: #083a59;
}
</style>