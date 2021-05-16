import { defineConfig } from 'umi';

// ref: https://umijs.org/config/
export default defineConfig({
  antd: {},
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
});
