<script>
import axios from "axios";
import { store } from "../data/store.js";

export default {
  name: "AppMain",
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

      <div class="row mt-5"></div>
    </div>
  </main>
</template>

<style></style>
