import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home",

        },
        {
            path:"/register",
            component:()=>import("../pages/register"),
            meta: {
                showTab: false,
              },
        },
        {
            path:"/login",
            component:()=>import("../pages/login"),
            meta: {
                showTab: false,
              },
        },
        {
            path:"/home",
            component:()=>import("../pages/home"),
            meta: {
                showTab: true
              },
        },
        {
            path:"/fenlei",
            component:()=>import("../pages/fenlei"),
            meta: {
                showTab: true
              },
        },
        {
            path:"/mi",
            component:()=>import("../pages/mi"),
            meta: {
                showTab: true,
              },
        },
        {
            path:"/cart",
            component:()=>import("../pages/cart"),
            meta: {
                showTab: true
              },
        },
        {
            path:"/user",
            component:()=>import("../pages/user"),
            meta: {
                showTab: true
              },
        },
        {
            path:"/detail",
            component:()=>import("../pages/detail"),
            meta: {
                showTab: false,
              },
        },
        {
            path:"/oder",
            component:()=>import("../pages/order"),
            meta: {
                showTab: false,
              },
        },
    ]
})

export default router;