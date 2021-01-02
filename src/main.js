import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);
// import home from './views/home.vue';


Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
