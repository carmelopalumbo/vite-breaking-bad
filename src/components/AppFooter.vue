<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer>
    <p class="text-center fs-5 py-4 text-white">
      Made with &hearts; by Carmelo Palumbo
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
footer::before {
  content: "";
  display: block;
  border: 2px solid $primary-color;
}
</style>
