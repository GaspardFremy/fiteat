import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore';

import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueFirestore);

// let app = ''
//
// firebase.initializeApp( {
//   apiKey: "AIzaSyC2CTC-cqF1z8695zJWEwO9CjGq8bMQqiY",
//   authDomain: "authhack-b8641.firebaseapp.com",
//   databaseURL: "https://authhack-b8641.firebaseio.com",
//   projectId: "authhack-b8641",
//   storageBucket: "",
//   messagingSenderId: "602909097019",
//   appId: "1:602909097019:web:c02961112998cc8f"
// })


// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     app = new Vue({
//       router,
//       render: h => h(App)
//     }).$mount('#app')
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
