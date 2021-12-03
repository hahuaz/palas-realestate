export const state = () => ({
  konuts: [],
})

export const getters = {
  getKonut: (state) => (id) => {
    return state.konuts.find((konut) => konut._id === id)
  },
}

export const mutations = {
  ADD_KONUTS(state, payload) {
    state.konuts = payload
  },
}

export const actions = {
  /* this is available in nuxt-store. so you can access axios with this.$axios */
  async fetchKonuts({ commit }) {
    try {
      const konuts = await this.$axios.$get('/konuts')
      commit('ADD_KONUTS', konuts)
    } catch (error) {
      throw new Error("Coldn't fetch konuts")
    }
  },
  async fetchKonut({ commit }, { id }) {
    try {
      return await this.$axios.$get(`/konuts/${id}`)
    } catch (error) {
      throw new Error("Coldn't fetch konut")
    }
  },
}
