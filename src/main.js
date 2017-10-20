// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import jQuery from 'jquery'
global.jQuery = jQuery

import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
require('bootstrap/dist/js/bootstrap.js')

import Styles from '@/scss/main.scss'
import Hover from 'hover.css/css/hover.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
