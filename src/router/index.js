import Vue from 'vue'
import VueRouter from 'vue-router'
import Cover from '../views/Cover'
import Main from '../views/Main'
import Final from "@/views/Final";

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'cover',
      component: Cover
   },
   {
      path: '/main',
      name: 'main',
      component: Main
   },
   {
      path: '/final',
      name: 'final',
      component: Final,
      props: true
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
