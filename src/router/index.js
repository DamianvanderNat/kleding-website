import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Bikinis from "@/views/Bikinis.vue";
import Dresses from "@/views/Dresses.vue";
import Pants from "@/views/Pants.vue";
import Shoes from "@/views/Shoes.vue";
import Suits from "@/views/Suits.vue";
import Shirts from "@/views/Shirts.vue";
import About from "@/views/About.vue";
import Dress4 from "@/views/Product/Dress4.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Shirts",
    component: Shirts,
  },
  {
    path: "/",
    name: "Suits",
    component: Suits,
  },
  {
    path: "/",
    name: "Shoes",
    component: Shoes,
  },
  {
    path: "/",
    name: "Pants",
    component: Pants,
  },
  {
    path: "/",
    name: "Dresses",
    component: Dresses,
  },
  {
    path: "/",
    name: "Bikinis",
    component: Bikinis,
  },
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Dress4",
    component: Dress4,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;