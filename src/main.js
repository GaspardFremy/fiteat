import Vue from 'vue'
import firebase from 'firebase'

import App from './App.vue'
import VueFirestore from 'vue-firestore';

import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueFirestore);

let app = ''

firebase.auth().onAuthStateChanged(() => {
if (!app) {
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
})
