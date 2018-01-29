import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

const index = require('../pages/index.vue');
const alpha = require('../pages/alpha.vue');
const progress = require('../pages/progress.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'index',
            path: '/',
            component: index,
        },
        {
            name: 'alpha',
            path: '/alpha',
            component: alpha,
        },
        {
            name: 'progresses',
            path: '/progress',
            component: progress,
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

export default router;