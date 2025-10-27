import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import CrewView from '../views/CrewView.vue'
import TechnologyView from '../views/TechnologyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/destination', name: 'Destination', component: DestinationView },
    { path: '/crew', name: 'Crew', component: CrewView },
    { path: '/technology', name: 'Technology', component: TechnologyView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router