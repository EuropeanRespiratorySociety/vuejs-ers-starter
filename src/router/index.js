import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import Article from '@/components/Article'

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
      component: Category
    },
    {
      path: '/articles/:slug',
      name: 'Article',
      component: Article
    },
    {
      path: '/:slug/page/:id',
      name: 'PaginatedNews',
      component: Category
    }
  ]
})
