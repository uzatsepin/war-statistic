import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import HumansComponent from "../views/HumansComponent.vue";
import TanksComponent from "../views/TanksComponent.vue";
import CombatComponent from "../views/CombatComponent.vue";
import BPLAComponent from "../views/BPLAComponent.vue";
import TestComponent from "../views/TestComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home - Dashboard APP",
    component: HomeComponent,
  },
  {
    path: "/humans",
    name: "Humans - Dashboard APP",
    component: HumansComponent,
  },
  {
    path: "/tanks",
    name: "Tanks - Dashboard APP",
    component: TanksComponent,
  },
  {
    path: "/combat",
    name: "Combat - Dashboard APP",
    component: CombatComponent,
  },
  {
    path: "/bpla",
    name: "BPLA - Dashboard APP",
    component: BPLAComponent,
  },
  {
    path: "/test",
    name: "TESTING",
    component: TestComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
