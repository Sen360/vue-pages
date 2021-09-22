import Vue from 'vue'
import VueRouter from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import ParentComponent from '../components/ParentComponent.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/parent/:id',
        component: ParentComponent
    }
];

const router = new VueRouter({
    routes
})

export default router