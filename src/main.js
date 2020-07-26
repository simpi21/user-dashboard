import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: app => app(App),
  data: {
    val: 5
  },
}).$mount('#app')
