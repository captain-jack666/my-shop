import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import request from './utils/request'

Vue.config.productionTip = false

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })
// request.api('http://123.207.32.32:8000/home/multidata')
request.getRequest('http://123.207.32.32:8000/home/multidata').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
new Vue({
  render: h => h(App),
}).$mount('#app')
