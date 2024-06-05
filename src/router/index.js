import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(porcess.env.BASE_URL),
    routes,
});

export default router;