import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Today from '../views/Today.vue';
import UserPage from '../views/UserPage.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/today',
    name: 'today',
    component: Today,
  },
  {
    path: '/userpage',
    name: 'user',
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
