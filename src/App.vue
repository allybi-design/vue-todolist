<template>
  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/layout/header";

export default {
  name: "App",
  components: { Header }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.4;
}

.container {
  width: 80vw;
  margin: 0 auto;
}

ul {
  list-style: none;
}
</style>
