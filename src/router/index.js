import Vue from 'vue'
import VueRouter from 'vue-router'
import entry from "@/views/entry.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/entry'
  },
  {
    path: '/entry',
    component: entry,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
