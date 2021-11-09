<template>
  <div class="bg-white my-4 p-2 rounded-md w-8/12 mx-auto grid grid-cols-10 text-center">
    <span
      :class="
      page == current ? 'cursor-pointer bg-summerHair' :
      'cursor-pointer'
      "
      v-for="page in pages"
      :key="page"
      @click="filter(page)"
    >
      {{ page }}
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const pages = computed(() => {
      return store.state.paginated;
    });
    const current = computed(() => {
      return store.state.current;
    });

    const filter = (page) => {
      store.dispatch("getCharacters", page);
    };

    return {
      pages,
      filter,
      current,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>