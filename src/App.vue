<template>
  <div>
    <img
      class="w-1/2 mx-auto my-4"
      src="./assets/ram-logo.png"
      alt="Rick and Morty"
    />
    <filter-by-status />
    <filter-by-name />
    <list-characters />
    <pagination />
  </div>
</template>

<script>
import FilterByName from "./components/FilterByName.vue";
import FilterByStatus from "./components/FilterByStatus.vue";
import ListCharacters from "./components/ListCharacters.vue";
import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
    Pagination,
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