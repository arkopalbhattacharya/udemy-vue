import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  //  Connects the store to our vue app
  store,
  render: (h) => h(App)
}).$mount('#app');
