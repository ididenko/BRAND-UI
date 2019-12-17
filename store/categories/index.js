import Category from '~/models/Category'
import Product from '~/models/Product'

export const actions = {
  async fetch({ commit }, { page = 1, perPage = 8 }) {
    try {
      const { data } = await this.$axios.$get('product-categories', {
        params: { page, perPage }
      })
      return data.map(p => new Category(p))
    } catch (e) {
      throw e
    }
  },
  async fetchById({ commit }, { id }) {
    try {
      const { data } = await this.$axios.$get(`product-categories/${id}`)
      return new Category(data)
    } catch (e) {
      throw e
    }
  },
  async products({ commit }, { id }) {
    try {
      const { data } = await this.$axios.$get(
        `product-categories/${id}/products`
      )
      return data.map(p => new Product(p))
    } catch (e) {
      throw e
    }
  }
}
