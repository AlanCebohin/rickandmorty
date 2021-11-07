<template>
  <div class="flex items-center justify-center my-4">
    <div
      class="
        md:w-1/2 md:mx-auto
        grid grid-cols-4
        text-center
        bg-black
        rounded
        text-lg text-white
        font-medium
        p-2
        gap-4
      "
    >
      <template v-for="status in statuses" :key="status">
        <span
          class="item cursor-pointer hover:text-gray-300"
          v-if="status == 'All'"
          @click="filter('')"
        >
          {{ status }}
        </span>
        <span
          class="item cursor-pointer hover:text-gray-300"
          v-else-if="status == 'unknown'"
          @click="filter(status)"
          >Unknown
        </span>
        <span
          class="item cursor-pointer hover:text-gray-300"
          v-else
          @click="filter(status)"
          >{{ status }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const statuses = ["All", "Alive", "Dead", "unknown"];

    const filter = (status) => {
      store.dispatch("filterByStatus", status);
    };

    return {
      filter,
      statuses,
    };
  },
};
</script>

<style>
</style>