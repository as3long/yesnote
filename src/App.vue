<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { Toast } from 'vant';

const defaultLayout = 'default';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout';
    }
  },
  watch: {
    '$store.state.toastText': function (val, oldVal) {
      if (val !== '') {
        Toast(val);
        this.$store.dispatch('resetToast');
      }
    },
    '$store.state.redirect': function(val) {
      if (val !== '') {
        this.$router.push(val);
        this.$store.dispatch('resetRedirect');
      }
    },
  },
  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },
  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
