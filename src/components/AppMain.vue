<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
import AppLoading from "./AppLoading.vue";
import { store } from "../data/store.js";

export default {
  name: "AppMain",
  components: {
    AppCard,
    AppLoading,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mt-5" v-if="store.isLoad">
        <div
          class="col-lg-4 col-md-6 col-sm-12 mb-5"
          v-for="(character, index) in store.bbData"
          :key="index"
        >
          <AppCard :characterData="character" />
        </div>
      </div>
      <div class="load-container" v-else><AppLoading /></div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
.load-container {
  min-width: 100vh;
  margin: 50px auto;
  display: flex;
  justify-content: center;
}
</style>
