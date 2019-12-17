import Company from '~/models/Company'

export const actions = {
  async fetch({ commit }) {
    try {
      const { data } = await this.$axios.$get('company')
      return new Company(data)
    } catch (e) {
      throw e
    }
  }
}
