import { createRouter, createWebHistory } from 'vue-router';

const Base = import('../views/Base');
const routes = [
  {
    path: '/',
    component: Base,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
