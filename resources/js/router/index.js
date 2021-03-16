import {createRouter, createWebHistory} from 'vue-router';
import Index from '../views/Index';
import Show from '../views/Show';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/posts/:postId/:slug',
        name: 'show',
        component: Show
    },

]
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
