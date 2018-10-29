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
  data: function () {
    return {
      title: 'Casting',
      describ: 'Nigeria’s Number 1 premium casting website, for real actors by real casting directors. Powered by technology, with the aim of ease, efficiency and affordability.'
    }
  },
  // Usage with context the component
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: this.describ , id: 'desc' }
    ]
  }
  // updated () {
  //   if (!localStorage.token && this.$route.path !== '/') {
  //     this.$router.push('/?redirect=' + this.$route.path)
  //   }
  // }
};
</script>

<style>
</style>
