import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import HumansComponent from "../views/HumansComponent.vue";
import TanksComponent from "../views/TanksComponent.vue";
import CombatComponent from "../views/CombatComponent.vue";

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeComponent,
  },
  {
    path: "/humans",
    name: "Humans",
    component: HumansComponent,
  },
  {
    path: "/tanks",
    name: "Tanks",
    component: TanksComponent,
  },
  {
    path: "/combat",
    name: "Combat",
    component: CombatComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
