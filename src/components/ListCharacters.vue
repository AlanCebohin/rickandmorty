<template>
<section>
    <div class="characters grid sm:grid-cols-2 md:grid-cols-3">
        <div class="characters__item max-w-10 mx-auto" v-for="character in characters" :key="character.id">
            <CardCharacter :character="character" />
        </div>
    </div>
</section>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

import CardCharacter from './CardCharacter.vue'
export default {
    components: {
        CardCharacter
    },
    setup () {
        const store = useStore();
        const characters = computed(() => {
            return store.state.charactersFilter
        })

        onMounted(() => {
            store.dispatch('getCharacters')
        })
        return {
            characters,
        }
    }
}
</script>