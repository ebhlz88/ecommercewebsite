import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap";
import "./assets/app.scss";
import "popper.js";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.config.productionTip = false;

import services from "./components/services.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import home from "./components/home.vue";
const routes = [{ path: "/home", component: home },
{path:"/cardview",component:services}];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
