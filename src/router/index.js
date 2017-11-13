import Vue from 'vue'
import Router from 'vue-router'
import Simple from '@/components/Simple'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/:slug',
      name: 'News',
      component: Simple
    },
    {
      path: '/:slug/page/:id',
      name: 'PaginatedNews',
      component: Simple
    }
  ]
})
