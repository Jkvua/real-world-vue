import { createRouter, createWebHistory } from 'vue-router' /*importando a biblioteca vue-router*/
import EventListView from '../views/EventListView.vue' /*importamdo o componente que vamos usar*/
import EventDetailsView from '../views/EventDetailsView.vue'    
import AboutView from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    }

  ]
})

export default router
