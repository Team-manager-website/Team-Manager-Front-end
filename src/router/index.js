import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/HomeView.vue'
import CreateAccount from '../views/CreateAccountPage.vue'
import CreateFakeBankAccount from '../views/CreateFakeBankAccount.vue'
import Team from '../views/Team.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Login
        },
        {
            path: '/createaccount',
            name: 'createaccount',
            component: CreateAccount
        },
        {
            path: '/createfbaccount',
            name: 'createfbaccount',
            component: CreateFakeBankAccount
        },
        {
            path: '/team',
            name: 'team'
            component: Team
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
