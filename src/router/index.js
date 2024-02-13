import { createRouter, createWebHistory } from 'vue-router'
import ViewNotesVue from '../views/ViewNotes.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotesVue
    },
    {
        path: '/stats',
        name: 'stats',
        component: () => import('../views/ViewStats.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;