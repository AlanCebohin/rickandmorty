<template>
  <div>
    <img class="w-1/2 mx-auto my-4" src="./assets/ram-logo.png"  alt="Rick and Morty">
    <filter-by-status />
    <list-characters />
  </div>
</template>

<script>
import FilterByStatus from "./components/FilterByStatus.vue";
import ListCharacters from "./components/ListCharacters.vue";
export default {
  name: "App",
  components: {
    ListCharacters,
    FilterByStatus,
  },
};
</script>

<style
    FilterByStatus>
* {
  box-sizing: border-box;
}
body {
  background-color: #24325fff;
}
</style>