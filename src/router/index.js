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
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../views/ViewEditNote.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/ViewAuth.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;