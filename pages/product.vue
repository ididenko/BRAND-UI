<template>
  <div class="container">
    <Breadcrumb />
    <h1>
      {{ h1 }}
    </h1>
    <div v-html="content"></div>
    <ProductCard :product="product" />
    <ProductSeries :list="product.series" />
  </div>
</template>

<script>
import { Breadcrumb } from '~/components/Common'
import { ProductCard, ProductSeries } from '~/components/Product'

export default {
  name: 'ProductPage',
  components: { Breadcrumb, ProductCard, ProductSeries },
  async asyncData({ store, params }) {
    let product = {}
    try {
      product = await store.dispatch('products/fetchById', params.id)
    } catch (e) {}
    return {
      product
    }
  },
  head() {
    return {
      title: this.product.title,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: this.product.description
        },
        {
          hid: `robots`,
          name: 'robots',
          content: 'index, follow'
        }
      ]
    }
  }
}
</script>
