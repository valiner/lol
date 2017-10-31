import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import newsList from '@/components/newslist'
import xpanle from '@/components/panle'
import news from '@/page/news/news'
import newsdetails from '@/page/newsdetails/newsdetails'
import recordshow from '@/page/record/recordshow'
import userdetails from '@/page/record/userdetails'
import recordlist from '@/page/record/recordlist'
import gameshow from '@/page/game/gameshow'
import matchdetails from '@/page/game/matchdetails'
import videopaly from '@/page/common/videopaly'
import hero from '@/page/hero/hero'

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
      path: '/hero',
      name: 'hero',
      component: hero
    },
    {
      path: '/recordshow',
      name: 'recordshow',
      component: recordshow
    },
    {
      path: '/gameshow',
      name: 'gameshow',
      component: gameshow
    },
    {
      path: '/videopaly/:gvideo_url',
      name: 'videopaly',
      component: videopaly
    },
    {
      path: '/matchdetails/:game_id',
      name: 'matchdetails',
      component: matchdetails
    },
    {
      path: '/recordlist/:areaid/:userid',
      name: 'recordlist',
      component: recordlist
    },
    {
      path: '/userdetails/:areaid/:userid',
      name: 'userdetails',
      component: userdetails
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
