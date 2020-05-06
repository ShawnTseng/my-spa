<template>
  <div>
    <Menu />
    <img src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  components: { Menu }
};
</script>
