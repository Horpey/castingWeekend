<template>
  <div id="app">
    <navheader/>
    <main>
      <router-view></router-view>
    </main>
    <siteFooter/>
  </div>
</template>

<script>
import navheader from '../template/navheader';
import siteFooter from '../template/siteFooter';

export default {
	name: 'appView',

	data() {
		return {};
	},
	components: {
		navheader: navheader,
		siteFooter: siteFooter,
	},
};
</script>

<style>
@import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
@import '../../assets/css/responsive.css';
@import '../../assets/css/main.css';
@import '../../assets/css/hover.css';
@import '../../assets/slick/slick.css';
@import '../../assets/slick/slick-theme.css';
@import '../../assets/css/timeline.css';
</style>
