import firebase from 'firebase/app'
import 'firebase/auth'
import Vue from 'vue'
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