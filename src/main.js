import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
   router,
   store,
   Vue2TouchEvents,
   render: h => h(App)
}).$mount('#app')
