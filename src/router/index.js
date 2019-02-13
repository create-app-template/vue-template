import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Home from '../container/Home';

Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router;
