import Vuex from 'vuex';
import Vue from 'vue';

//  Connects the current scope's Vue library to vuex,
//  an initial handshake.
Vue.use(Vuex);

//  Exports a new Store for use within the app
export default new Vuex.Store({
  modules: {}
});
