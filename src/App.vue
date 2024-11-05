<template>
  <div id="app">
    <nav>
      <router-link to="/">首頁</router-link> |
      <router-link to="/quiz">開始測驗</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
// App component logic
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> 