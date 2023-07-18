import HomeView from '@/views/HomeView.vue';
import LoginRegisterView from '@/views/LoginRegisterView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginRegisterView,
      meta: { title: 'Super Island - Faça o login ou cadastro da sua conta' }
    },
    {
      path: '/game/home',
      name: 'game-home',
      component: HomeView,
      meta: { title: 'Game' }
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
});

interface RouteMeta {
  title?: string;
}

router.beforeEach((to, _from, next) => {
  const meta = to.meta as RouteMeta;
  if (meta && meta.title) {
    document.title = meta.title;
  } else {
    document.title = 'Super Island - Algum erro aconteceu';
  }
  next();
});

export default router;
