import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
          path: '/',
          name: '/',
          component: () => import('../views/Menu'),
        },
        {
          path: '/ques',
          name: '/ques',
          component: () => import('../views/Ques'),
        },
      ]
    },


  ]
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router