import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes,
  },
  {
    path: '/edit-note/:id',
    name: 'editNot',
    component: () => import('../views/ViewEditNote.vue'),
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
