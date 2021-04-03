import Vue from 'vue'
import VueRouter from 'vue-router'
import entry from "@/views/entry.vue"
import home from "@/views/home/home.vue"
import changePwd from "@/views/login/changePwd.vue"
import retrievePwd from "@/views/login/retrievePwd.vue"

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
  {
    path: '/changePwd',
    component: changePwd,
  },
  {
    path: '/retrievePwd',
    component: retrievePwd,
  },
  {
    path: '/home',
    component: home,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
