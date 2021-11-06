import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Works from "../views/Works.vue";
import notFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/works",
    name: "Works",
    component: Works
  },
  {
    path: "*/**",
    name: "404",
    component: notFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
