import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import BorrowView from '../views/BorrowView.vue'
import ReturnView from '../views/ReturnView.vue'
import BorrowSuccessView from '../views/BorrowSuccessView.vue'

const routes = [
  { path: '/', 
    name: 'home', 
    component: HomeView,
    props: true 
  },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { 
    path: '/borrow/:isbn', 
    name: 'borrow', 
    component: BorrowView 
  },
  {
    path: '/borrow-success',
    name: 'borrow-success',
    component: BorrowSuccessView
  },
  { path: '/return', name: 'return', component: ReturnView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
