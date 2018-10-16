import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import(/* webpackChunkName: "about" */ './views/Usuarios.vue')
    },
    {
      path: '/novoUsuario',
      name: 'novoUsuario',
      component: () => import(/* webpackChunkName: "about" */ './views/NovoUsuario.vue')
    }
  ]
})
