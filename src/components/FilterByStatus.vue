<template>
  <!-- component -->
  <!-- <div class="flex items-center justify-center">
    <div class="flex border-2 rounded">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search...">
        <button class="flex items-center justify-center px-4 border-l bg-lightRick">
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button>
    </div>
</div> -->
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