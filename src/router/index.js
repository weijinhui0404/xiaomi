import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home",

        },
        {
            path: "/register",
            component: () => import("../pages/register"),
            meta: {
                showTab: false,
            },
        },
        {
            path: "/login",
            component: () => import("../pages/login"),
            meta: {
                showTab: false,
            },
        },
        {
            path: "/home",
            component: () => import("../pages/home"),
            meta: {
                showTab: true
            },
        },
        {
            path: "/fenlei",
            component: () => import("../pages/fenlei"),
            meta: {
                showTab: true
            },
        },
        {
            path: "/mi",
            name: "mi",
            component: () => import("../pages/mi"),
            meta: {
                showTab: true,
            },
        },
        {
            path: "/cart",
            component: () => import("../pages/cart"),
            meta: {
                showTab: true
            },

            // 设置路由独享守卫
            beforeEnter: (to, from, next) => {
                const isLogin = localStorage.getItem('token') || '';
                if (!isLogin) {
                    next('/login');
                } else {
                    next();
                }
            },
        },
        {
            path: "/user",
            component: () => import("../pages/user"),
            meta: {
                showTab: true
            },
        },
        {
            path: "/detail/:id",
            component: () => import("../pages/detail"),
            meta: {
                showTab: false,
            },
        },
        {
            path: "/fabu",
            component: () => import("../pages/fabu"),
            meta: {
                showTab: false,
            },
        },
        {
            path: "/order",
            component: () => import("../pages/order"),
            meta: {
                showTab: false,
            },
            // 设置路由独享守卫
            beforeEnter: (to, from, next) => {
                const isLogin = localStorage.getItem('token') || '';
                if (!isLogin) {
                    next('/login');
                } else {
                    next();
                }
            },
        },
        {
            path: "/address",
            component: () => import("../pages/address"),
            meta: {
                showTab: false,
            },
            // 设置路由独享守卫
            beforeEnter: (to, from, next) => {
                const isLogin = localStorage.getItem('token') || '';
                if (!isLogin) {
                    next('/login');
                } else {
                    next();
                }
            },
        },
        {
            path: "/addressAdd",
            component: () => import("../pages/addressAdd"),
            meta: {
                showTab: false,
            },
        },
        {
            path: "/addressEdit",
            component: () => import("../pages/addressEdit"),
            meta: {
                showTab: false,
            },
        },
        {
            path: "/changeinfo",
            component: () => import("../pages/changeinfo"),
            meta: {
                showTab: false,
            },
            // 设置路由独享守卫
            beforeEnter: (to, from, next) => {
                const isLogin = localStorage.getItem('token') || '';
                if (!isLogin) {
                    next('/login');
                } else {
                    next();
                }
            },
        },
        {
            path: "/changepassword",
            component: () => import("../pages/changepassword"),
            meta: {
                showTab: false,
            },
            // 设置路由独享守卫
            beforeEnter: (to, from, next) => {
                const isLogin = localStorage.getItem('token') || '';
                if (!isLogin) {
                    next('/login');
                } else {
                    next();
                }
            },
        },
    ]
})

export default router;