import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Importing Bootstrap 4.2.1 (CSS)
import "bootstrap/dist/css/bootstrap.min.css";
// Importing jQuery 3.4.1
window.$ = require("jquery");
// Importing Bootstrap 4.2.1 (JS)
import "bootstrap/dist/js/bootstrap.min.js";
// Importing AOS JS
import AOS from "aos";
// Importing AOS CSS
import "aos/dist/aos.css";
// Importing Reset Styles
import "@/assets/css/reset.scss";
// Import Vue Carousel
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

import VueMeta from "vue-meta";

Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    AOS.init();
  }
}).$mount("#app");
