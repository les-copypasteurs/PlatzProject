import {createRouter, createWebHistory} from 'vue-router';
import Section from '../views/Section';
import Detail from '../views/Detail';

const routes = [
    {
        path: '/',
        name: 'Section',
        component: Section
    },
    {
        path: '/posts/:postId/:slug',
        name: 'detail',
        component: Detail
    },

]
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
