import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/populaire',
    name:"populaire",
    component: () => import('../views/PopulaireView.vue')
  },
  {
    path:'/categories',
    name:"categories",
    component: () => import('../views/CategoriesView.vue')
  },
  {
    path:'/categorie/:id/:name',
    name:"categorie",
    component: () => import('../views/CategorieView.vue')
  },
  {
    path:'/recherche',
    name:"recherche",
    component: () => import('../views/RechercheView.vue')
  },
  {
    path:'/detailFilm/:id',
    name:"detail",
    component: () => import('../views/DetailFilmView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/myMovie',
    name: 'myMovie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/movieView.vue')
  },
  {
    path: '/:patchMatch(.*)*',
    name:'notFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
