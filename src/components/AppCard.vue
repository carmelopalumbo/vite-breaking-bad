<script>
export default {
  name: "AppCard",
  props: {
    characterData: Object,
  },
};
</script>

<template>
  <div class="card mb-4" style="width: 18rem">
    <img
      :src="characterData.img"
      class="card-img-top"
      alt=""
      onerror="this.src='/brbalogo.svg'"
    />
    <div class="card-body">
      <h5 class="card-title text-center fw-bold py-3 fs-4">
        {{ characterData.name }}
      </h5>
      <p class="card-text">
        Nickname: <strong>{{ characterData.nickname }}</strong>
      </p>
      <p class="card-text">
        Status: <strong>{{ characterData.status }}</strong>
      </p>
      <p class="card-text">
        Actor: <strong>{{ characterData.portrayed }}</strong>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
img {
  height: 400px;
  object-fit: cover;
}

.card-body {
  background-color: $primary-color;
  color: white;
}

.card {
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.08);
  }
}
</style>
