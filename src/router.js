import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Bible from "./views/Bible.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name:'home', component: Home },
  { path: "/bible", name:'Bible', component: Bible },
  { path: "/bible/:book", name:'Chapter', component: Bible },
  { path: "/bible/:book/:chapter", name:'read', component: Bible },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
