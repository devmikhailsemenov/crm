import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: { layout: 'main' },
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        meta: { layout: 'main' },
        component: () => import('@/views/About.vue'),
    },
    {
        path: '/auth',
        name: 'Auth',
        meta: { layout: 'login' },
        component: () => import('@/views/Auth.vue'),
    },
    {
        path: '/contacts',
        name: 'Contacts',
        meta: { layout: 'contacts' },
        component: () => import('@/views/Contacts.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;