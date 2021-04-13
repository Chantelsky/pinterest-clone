import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Today from '../views/Today.vue';

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
  // {
  //   path: '/today',
  //   name: 'Today',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Today.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
