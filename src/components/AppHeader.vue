<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="container text-center">
      <img src="/brbalogo.svg" alt="logo" />
      <p class="d-inline-block fs-2 fw-bold">API</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
header {
  img {
    transform: scale(0.4);
  }
  p {
    color: $primary-color;
  }
}
</style>
