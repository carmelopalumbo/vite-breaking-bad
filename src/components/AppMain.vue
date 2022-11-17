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
  methods: {
    getData() {
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
    this.fixNoImg();
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <select
          class="form-select w-25 mb-5"
          aria-label="Default select example"
        >
          <option value="1">BrBa World</option>
          <option value="2">Breaking Bad</option>
          <option value="3">Better Call Saul</option>
        </select>
      </div>

      <div class="row mt-5" v-if="store.isLoad">
        <div
          class="col-4"
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
.load-container {
  min-width: 100vh;
  margin: 50px auto;
  display: flex;
  justify-content: center;
}
</style>
