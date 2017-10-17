import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import newsList from '@/components/newslist'
import xpanle from '@/components/panle'
import news from '@/page/news/news'
import newsdetails from '@/page/newsdetails/newsdetails'
import recordshow from '@/page/record/recordshow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/recordshow',
      name: 'recordshow',
      component: recordshow
    },
    {
      path: '/newslist',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsdetails/:newid',
      name: 'newsdetails',
      component: newsdetails
    },
    {
      path: '/xpanle',
      name: 'xpanle',
      component: xpanle
    }
  ]
})
