<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./data/store.js";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getData() {
      store.selectedCategory = "";
      store.default = true;
      store.isLoad = false;
      axios
        .get(store.apiUrl)
        .then((result) => {
          store.bbData = result.data;
          store.isLoad = true;
        })
        .catch((error) => {
          console.log("ERROR!");
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<template>
  <div class="container">
    <AppHeader @getDataEvent="getData()" />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./style/general";
@use "./style/partials/var" as *;
</style>
