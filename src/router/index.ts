import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/app',
      name: 'app',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/AppView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (user) {
      if (to.name === 'sign-in' || to.name === 'register') {
        next('/app')
      } else {
        next()
      }
    } else {
      next('/')
    }
  } else {
    if (user && (to.name === 'sign-in' || to.name === 'register')) {
      next('/app')
    } else {
      next()
    }
  }
})

export default router
