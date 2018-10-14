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
import navheader from './components/template/navheader';
import siteFooter from './components/template/siteFooter';

export default {
	name: 'app',
	components: {
		navheader: navheader,
		siteFooter: siteFooter,
  },
  // updated () {
  //   if (!localStorage.token && this.$route.path !== '/') {
  //     this.$router.push('/?redirect=' + this.$route.path)
  //   }
  // }
};
</script>

<style>
</style>
