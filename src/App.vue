<template>
  <div id="app">
    <Navbar class="navbar"></Navbar>
    <banner />
    <router-view />
  </div>
</template>

<script>
import banner from "./components/banner.vue";
export default {
  name: "App",
  components: {
    banner,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
