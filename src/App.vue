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
import { mapState, mapMutations } from "vuex";

export default {
  components: { Menu },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["addCount"])
  }
};
</script>
