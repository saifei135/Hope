import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomePage  from './components/HomePage.vue';
import adf  from './components/canvas/adf.vue';
import Gradient from './components/canvas/gradient.vue';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//定义routes路由的集合，数组类型
const routes = [
    {path: '/', redirect: ''},
    {path: '/canvas/adf', component: adf},
    {path: '/canvas/gradient', component: Gradient}
]
//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    routes
});

export default router