<template>
  <div class='bg'>
    <router-link to="/">Page1</router-link>
    <router-link to="/homepage"><el-button class="goMeet" type="primary">MEET YOURSELF</el-button></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Meet',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  width: 100%;
}
.bg .goMeet {
    width: 20%;
    font-size: 2rem;
}
</style>
