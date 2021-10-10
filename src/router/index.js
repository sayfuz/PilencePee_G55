import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import create from '../components/create.vue'
import update from '../components/update.vue'
import list from '../components/list.vue'
import aboutUs from '../components/aboutUs.vue'
import contact from '../components/contact.vue'
import signIn from '../components/signIn.vue'
import signUp from '../components/signUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/create',
    name: 'create',
    component: create
  },
  {
    path: '/update/:id',
    name: 'update',
    component: update
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    component: aboutUs
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: signUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
