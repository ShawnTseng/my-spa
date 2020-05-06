<template>
  <div>
    <Menu />
    <img src="./assets/logo.png" />
    <router-view></router-view>
    <hr />
    <h1>{{storeCount}}</h1>
    <h1>{{getStoreCount}}</h1>
    <button @click="add(1)">+1</button>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: { Menu },
  data() {
    return {
      localCount: 0
    };
  },
  computed: {
    myCount() {
      return this.localCount;
    },
    // ...mapState(["count", "username", "list"])
    ...mapState({
      storeCount: "count",
      // getStoreCount(state) {
      //   return state.count;
      // }
      getStoreCount: state => state.count
    })
  },
  methods: {
    // ...mapMutations(["addCount"])
    ...mapMutations({
      add: "addCount"
    })
    // addCount() {
    //   // this.$store.commit("addCount", 3);
    //   this.$store.commit({
    //     type: "addCount",
    //     step: 2
    //   });
    // }
  }
};
</script>
