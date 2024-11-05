<template>
  <div class="home">
    <h1>心理測驗</h1>
    <p>歡迎參加我們的心理測驗！</p>
    <router-link to="/quiz" class="start-btn">開始測驗</router-link>
  </div>
</template>

<script setup>
// Home view logic
</script>

<style lang="scss" scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  
  .start-btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 20px;
    
    &:hover {
      background-color: #45a049;
    }
  }
}
</style> 