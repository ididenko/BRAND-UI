import Settings from '~/models/Settings'

export const state = () => ({
  settings: false
})

export const getters = {
  settings(state) {
    return state.settings.length ? new Settings(state.settings) : new Settings()
  }
}

export const mutations = {
  SET_SETTINGS(state, settings) {
    state.settings = settings
  }
}

export const actions = {
  // async nuxtServerInit({ dispatch, state }) {
  //   if (!state.settings) {
  //     await dispatch('getSettings')
  //   }
  // },
  async getSettings({ commit }) {
    try {
      const { data } = await this.$axios.$get('settings')
      commit('SET_SETTINGS', data)
    } catch (e) {}
  }
}
