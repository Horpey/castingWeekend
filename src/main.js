// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App'
import router from './router'
// ... other imports ...
import axios from 'axios'

import VueGoodTablePlugin from 'vue-good-table';

// Google Map for Vuejs
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
    libraries: 'places'
  },
});



// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

import VueMomentLib from "vue-moment-lib";


// Install this library
Vue.use(VueMomentLib);

Vue.use(VueGoodTablePlugin);


// Importing Custom Js
import './assets/vendor/jquery/jquery.min.js'
import './assets/js/jquery.inview.min.js'
import './assets/js/jquery.youtube-inview-autoplay.js'
import './assets/js/main.js'
import './assets/js/responsive.js'
import './assets/js/youtube-setup.js'
import './assets/slick/slick.js'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/js/slick-setup.js'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: {
    App
  }
})
