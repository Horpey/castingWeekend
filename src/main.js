// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App'
import router from './router'
// ... other imports ...
import axios from 'axios'
import VueHead from 'vue-head'
// import * as webPush from 'web-push'


import VueGoodTablePlugin from 'vue-good-table';
import * as jsPDF from 'jspdf'
import VueScroller from 'vue-scroller'
// Google Map for Vuejs
import * as VueGoogleMaps from 'vue2-google-maps';

// firebase
import firebase from 'firebase'

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
Vue.use(VueHead)
Vue.use(VueGoodTablePlugin);
Vue.use(jsPDF);
Vue.use(VueScroller);

firebase.initializeApp({
  apiKey: "AIzaSyDzHFLXV0cSLJONOb6aaUnM2jF99yz4Ldo",
  authDomain: "cast-1a0d5.firebaseapp.com",
  databaseURL: "https://cast-1a0d5.firebaseio.com",
  projectId: "cast-1a0d5",
  storageBucket: "cast-1a0d5.appspot.com",
  messagingSenderId: "603714482854"
})




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
import './assets/js/slick-setup.js'


// Push Notification
// import './assets/pushNotification/firebase.js'
import './assets/pushNotification/client.js'



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
