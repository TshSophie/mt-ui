import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['./components/HelloWorld.vue'], resolve), //使用vue的异步组件技术 , 可以实现按需加载 .
  },
]

routes.push({
  path: '/test',
  name: 'test',
  component: (resolve) => require(['./docs/loading.md'], resolve),
})

routes.push({
  path: '/jsx',
  name: 'jsx',
  component: (resolve) => require(['./components/JSX.vue'], resolve),
  // component: () => import('./components/JSX.vue'),
})

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes,
})
