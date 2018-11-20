import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routes from '../router';

Vue.use(ElementUI);

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router;