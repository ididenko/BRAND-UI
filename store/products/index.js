import Product from '~/models/Product'

export const actions = {
  async fetch({ commit }) {
    try {
      const { data } = await this.$axios.$get('products')
      return data.map(p => new Product(p))
    } catch (e) {
      throw e
    }
  },
  async fetchById({ commit }, { id }) {
    try {
      const { data } = await this.$axios.$get(`products/${id}`)
      return new Product(data)
    } catch (e) {
      throw e
    }
  }
}
