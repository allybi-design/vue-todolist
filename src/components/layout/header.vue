<template>
  <header class="header">
    <h1>TodoList</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>/
      <router-link to="about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp"
};
</script>

<style lang="scss" scoped>
.header {
  background-image: linear-gradient(to bottom, #000000, #636363);
  box-shadow: 1px 1px 10px 0px #000000;
  border: 1px solid #000;
  color: #fff;
  text-align: center;
  padding: 10px;
  a {
    color: #fff;
    font-size: 1.25rem;
    padding-right: 5px;
    text-decoration: none;
  }
}
</style>
