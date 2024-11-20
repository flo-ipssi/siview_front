import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Dashboard from '@/components/Dashboard.vue'
import { useUserStore } from '@/stores/user'
import Expense from '@/components/Expense.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    { 
      path: '/dashboard',
      name: 'dashboard', 
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    { 
      path: '/expense',
      name: 'expense', 
      component: Expense,
      meta: { requiresAuth: true },
    }
  ],
  
})

// Navigation Guard
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth) {
    if (userStore.token) {
      if (!userStore.user) {
        try {
          await userStore.me()
        } catch (error) {
          return next({ name: 'login' })
        } 
      }
      return next()
    } else {
      return next({ name: 'login' })
    }
  }

  next()
})



export default router
