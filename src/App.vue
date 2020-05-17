<template>
  <div class="App">
    <h2>{{msg}}</h2>
    <h2>{{hello}}</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello App',
      hello: '哈哈哈'
    }
  },
}
</script>

<style lang="scss" scoped>
  .App {
    h2 {
      color: red;
    }
  }
</style>