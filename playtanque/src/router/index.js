import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Consolante from 'components/Consolante'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/consolante',
            name: 'Consolante',
            component: Consolante
        }
    ]
})
