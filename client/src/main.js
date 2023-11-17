import Vue from "vue";
import App from "./App.vue";
import VueCarousel from "vue-carousel";
import VueRouter from "vue-router";

import routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/style.css";

import Vuelidate from "vuelidate";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.use(Loading);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes,
  linkExactActiveClass: "nav-item active",
});

Vue.use(VueCarousel);
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
