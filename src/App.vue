<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  mounted () {
    this.$router.push('./newworld')
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: red
}
.box{
  width: 100px;
  height: 200px;
  background-color: red;
  color: blue
}

</style>
