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
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <select
            class="form-select w-25 mb-5"
            aria-label="Default select example"
            v-model="store.selectedCategory"
          >
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Better Call Saul">Better Call Saul</option>
            <option value="Breaking Bad, Better Call Saul">BrBa & BCS</option>
          </select>
        </div>
        <div class="col-3">
          <p class="fs-4 text-white text-center">
            Found {{ store.bbData.length }} characters.
          </p>
        </div>
      </div>

      <div class="row mt-5" v-if="store.isLoad">
        <div
          class="col-4 mb-5"
          v-for="(character, index) in store.bbData"
          :key="index"
          v-show="character.category === store.selectedCategory"
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

.container {
  p {
    background-color: $primary-color;
    border-radius: 10px;
  }
}
</style>
