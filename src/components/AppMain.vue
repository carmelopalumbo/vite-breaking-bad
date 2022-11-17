<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
import { store } from "../data/store.js";

export default {
  name: "AppMain",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getData() {
      axios
        .get(store.apiUrl)
        .then((result) => {
          store.bbData = result.data;
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
        <select class="form-select w-25" aria-label="Default select example">
          <option value="1">BrBa World</option>
          <option value="2">Breaking Bad</option>
          <option value="3">Better Call Saul</option>
        </select>
      </div>

      <div class="row mt-5">
        <div
          class="col-4"
          v-for="(character, index) in store.bbData"
          :key="index"
        >
          <AppCard :characterData="character" />
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
