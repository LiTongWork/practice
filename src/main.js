// const { add } = require('./js/a.js')

// console.log('add(1, 2)', add(1,2))

// require('./css/index.css')

import './css/index.css'

// 使用vue
import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})