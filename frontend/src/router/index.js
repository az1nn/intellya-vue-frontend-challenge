import {createRouter, createWebHistory} from "vue-router"
import UsersListView from "../views/UsersListView.vue"
import UserView from "../views/UserView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'users',
            component: UsersListView,
        },
        {
            path: "/user/:id",
            name: 'user',
            component: UserView,
            props: true,
        }
    ]
})

export default router