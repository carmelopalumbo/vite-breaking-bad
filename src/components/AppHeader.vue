<script>
import { store } from "../data/store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  computed: {
    getOutputCounter() {
      return store.bbData.length;
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="container text-center">
          <img src="/brbalogo.svg" alt="logo" />
          <p class="d-inline-block fs-2 fw-bold">API</p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <select
            class="form-select w-25 mb-5"
            aria-label="Default select example"
            v-model="store.selectSeries"
          >
            <option value="" selected @click="$emit('getDataEvent')">
              BrBa World
            </option>
            <option value="Breaking Bad" @click="$emit('getDataEvent')">
              Breaking Bad
            </option>
            <option value="Better Call Saul" @click="$emit('getDataEvent')">
              Better Call Saul
            </option>
          </select>
        </div>
        <div class="col-3">
          <p class="fs-4 text-white text-center">
            Found {{ getOutputCounter }} characters.
          </p>
        </div>

        <div class="col-3">
          <button
            type="button"
            class="btn btn-success"
            @click="$emit('getResetEvent')"
          >
            RELOAD
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
header {
  img {
    transform: scale(0.4);
  }
  .container {
    p {
      background-color: $primary-color;
      border-radius: 10px;
      color: white;
    }
    button {
      background-color: $primary-color;
      border: none;
      transition: all 0.4s;
      &:hover {
        background-color: darken($primary-color, 6%);
      }
    }
  }
}
</style>
