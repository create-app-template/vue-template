import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

if (module.hot) {
    module.hot.accept();
}