import { defineConfig } from '@umijs/max';

// ref: https://umijs.org/config/
export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
  ssr: {},
});
