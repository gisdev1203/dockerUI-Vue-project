import DashboardLayout from "../components/layout/DashboardLayout.vue";
import HomeView from "../components/Home/HomeView.vue";
import DetailView from "../components/Home/DetailView.vue";
import SettingView from "../components/Home/SettingView.vue";
import LoginView from "../components/auth/LoginView.vue";
import RegisterView from "../components/auth/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
  },

  {
    path: "/dashboard",
    component: DashboardLayout,
    name: "dashboard",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("jwt") === null) {
        next({
          path: "/",
          replace: true,
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/homeview",
    name: "HomeView",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("jwt") === null) {
        next({
          path: "/",
          replace: true,
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/detail/:id",
    name: "DetailView",
    component: DetailView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("jwt") === null) {
        next({
          path: "/",
          replace: true,
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/setting",
    name: "SettingView",
    component: SettingView,
    beforeEnter: (to, from, next) => {
      if (
        localStorage.getItem("jwt") === null ||
        JSON.parse(localStorage.getItem("user")).role === "client"
      ) {
        next({
          path: "/",
          replace: true,
        });
      } else {
        next();
      }
    },
  },
  { path: "/:notFound(.*)", component: null },
];

export default routes;
