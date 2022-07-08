import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'boards',
    alias:'/boards',
    component: () => import('@/components/Board/Board.vue'), // 동적 import
  },
  {
    path: '/BoardView',
    name: 'BoardView',
    component: () => import('@/components/BoardView/BoardView.vue'), // 동적 import
  },
  {
    path: '/BoardWriter',
    name: 'BoardWriter',
    component: () => import('@/components/Writer/Writer.vue'), // 동적 import
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});