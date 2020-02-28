import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const home = () => import('../views/home/Home')
const category = () => import('../views/category/Category.vue')
const cart = () => import('../views/cart/Cart.vue')
const profile = () => import('../views/profile/Profile.vue')
const detail = () => import('../views/detail/Detail.vue')
const Login = ()=> import('../views/login/Login.vue')
const routes = [
 {
   path:'',
   redirect:'/home'
 },
 {
   path:'/home',
   component:home
 },
 {
   path:'/category',
   component:category
 },
 {
   path:'/cart',
   component:cart
 },
 {
   path:'/profile',
   component:profile
 },
 {
   path:'/detail/:iid',
   component:detail
 },
 {
  path:'/login',
  component:Login
}
]


const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
