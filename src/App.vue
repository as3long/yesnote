<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  watch: {
    '$store.state.toastText': function (val, oldVal) {
      console.log(val, oldVal);
      if (val !== '') {
        Toast(val);
        this.$store.dispatch('resetToast');
      }
    },
    '$store.state.redirect': function(val) {
      this.$router.push(val);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
