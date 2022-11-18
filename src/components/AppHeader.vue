<script>
import { store } from "../data/store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
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
            v-model="store.selectedCategory"
          >
            <option value="" selected disabled>Select TV Series</option>
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

        <div class="col-3">
          <button
            type="button"
            class="btn btn-success"
            @click="$emit('getDataEvent')"
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
