import {createRouter, createWebHistory} from 'vue-router';
import Section from '../components/Section';

const routes = [
    {
        path: '/Platz/public/',
        name: 'Section',
        component: Section
    },

]
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
