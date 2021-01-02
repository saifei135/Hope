<template>
  <div id="app">
    <HomePage/>
    <!--
    <router-link to="/">Page1</router-link>
    <router-link to="/homepage"><el-button class="goMeet" type="primary">MEET YOURSELF</el-button></router-link>
    <router-view></router-view>
    -->
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
html,body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
