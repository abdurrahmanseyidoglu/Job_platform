import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import About from '../views/about/About.vue'
import Contact from '../views/contact/Contact.vue'
import Signin from '../views/sign-in-up/Sign-in.vue'
import Signup from '../views/sign-in-up/Sign-up.vue'
import Reset from '../views/sign-in-up/Reset-password.vue'






const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
    {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/reset-password',
    name: 'Reset',
    component: Reset
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
