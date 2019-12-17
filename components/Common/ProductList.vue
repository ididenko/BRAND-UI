<template>
  <div v-if="productList.length">
    <div slot="header">
      SLASH/PRODUCT:LIST
    </div>
    <div slot="list">
      <ul>
        <li v-for="product in productList" :key="product.id">
          <nuxt-link :to="{ name: 'product', params: { id: product.id } }">
            <strong>{{ product.article }}</strong>
            <span>{{ product.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductList',
  data() {
    return {
      productList: []
    }
  },
  async created() {
    try {
      this.productList = await this.fetch()
    } catch (e) {}
  },
  methods: {
    ...mapActions({
      fetch: 'products/fetch'
    })
  }
}
</script>
