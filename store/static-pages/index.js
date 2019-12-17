export const actions = {
  async fetch({ commit }, slug) {
    try {
      const { data } = await this.$axios.$get('static-pages' + slug)
      return data
    } catch (e) {
      throw e
    }
  }
}
