export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/logged_in/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/not_logged_in/Login.vue'),
  }
]