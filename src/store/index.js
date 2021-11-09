import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    pages: [],
    previous: '',
    next: '',
    current: '',
    paginated: [],
  },
  mutations: {
    setCharacter(state, payload) {
      state.characters = payload
    },
    setCharacterFilter(state, payload) {
      state.charactersFilter = payload
    },
    setPage(state, payload) {
      state.pages = payload
    },
    setPrevious(state, payload) {
      state.previous = payload
    },
    setNext(state, payload) {
      state.next = payload
    },
    setCurrent(state, payload) {
      state.current = payload
    },
    setPaginated(state, payload) {
      state.paginated = payload
    },
  },
  actions: {
    async getCharacters({ commit, state }, page = null) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();

        commit('setCharacter', data.results)
        commit('setCharacterFilter', data.results)

        const pages = [];
        for (let i = 1; i < data.info.pages; i++) {
          pages.push(i);
        }

        // Previous page
        if (data.info.prev) {
          commit('setPrevious', data.info.prev.slice(-1))
        }
        // Next page
        if (data.info.next) {
          commit('setNext', data.info.next.slice(-1))
        }
        // Current page
        if (data.info.next) {
          commit('setCurrent', data.info.next.match(/(\d+)/)[0] -1)
        } else commit('setCurrent', data.info.next.match(/(\d+)/)[0] +1)
        // Set pages
        commit('setPage', pages)


        const start = pages.slice(0, 5)
        const end = pages.slice(-4)
        let paginated = [];

        if (start.includes(state.current)) {
          paginated = pages.slice(0, 10)
        } else if(end.includes(state.current)) {
          paginated = pages.slice(-10);
        } else {
          let prev = pages.slice((state.current - 5), state.current);
          let next = pages.slice(state.current, (state.current + 5));
          paginated = prev.concat(next)
        }


        commit('setPaginated', paginated)
      } catch (error) {
        console.error(error);
      }
    },

    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharacterFilter', results)
    },

    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();

        if (characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharacterFilter', results)
    }
  },
  modules: {
  }
})
