import { createRouter, createWebHistory } from 'vue-router'
import GameOfThrones from '../views/GameOfThrones'
import Transformers from '../views/Transformers'
import TransformersContent from '../components/TransformersContent.vue'
import AlunosDetalhe from '../components/alunos/AlunosDetalhe.vue';
import Error404 from '../views/Error404';
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'transformersContent', params: {name: 'bumble-bee'}} //{ name: 'transformers'} // '/alunos'
  },
  {
    path: '/game-of-thrones',
    name: 'gameOfThrones',
    component: GameOfThrones
  },
  {
    path: '/transformers',
    name: 'transformers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Transformers'),
    props: { sidebar: true },
    children: [
      { path: ':name', name: 'transformersContent', component: TransformersContent }
    ]
  },
  {
    path: '/alunos',
    name: 'alunos',
    component: () => import('../views/Alunos'),
    children: [
      {
        path: ':id', name: 'alunoDetalhe', component: AlunosDetalhe
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: 'error404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
