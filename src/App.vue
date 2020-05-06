<template>
  <div>
    <Menu />
    <img src="./assets/logo.png" />
    <router-view></router-view>
    <hr />
    <h1>{{count}}</h1>
    <button @click="addCount">+1</button>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  components: { Menu },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    addCount() {
      this.$store.commit("addCount");
    }
  }
};
</script>
