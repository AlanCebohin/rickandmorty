<template>
  <div
    class="
      character
      bg-blue-400
      shadow-md
      rounded-md
      m-2
      transition
      duration-500
      ease-in-out
      hover:bg-blue-600 hover:shadow-lg
      transform
      hover:-translate-1 hover:scale-110 hover:z-10
      overflow-hidden
      cursor-pointer
    "
  >
    <img :src="character.image" :alt="character.name" />
    <div class="character__item p-2">
      <h3 class="text-2xl text-white hover:text-yellow-500 font-semibold">
        {{ character.name }}
      </h3>
      <div class="status flex-1 items-center mb-2">
        <span
          :class="
            character.status == 'Alive'
              ? 'alive px-2 animate-pulse bg-raygun mr-2 rounded-full'
              : character.status == 'Dead'
              ? 'dead px-2 animate-pulse bg-red-500 mr-2 rounded-full'
              : 'default px-2 animate-pulse bg-white mr-2 rounded-full'
          "
        ></span>
        <span class="text-gray-600 font-medium"
          >{{ character.status }} - {{ character.species }}</span
        >
      </div>
      <div class="origin text-white font-light">
        <span>{{ character.origin.name }}</span>
      </div>
      <div class="location text-white font-light">
        {{ character.location.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>