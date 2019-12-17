<template>
  <div class="container">
    <Breadcrumb />
    <h1>
      {{ h1 }}
    </h1>
    <div v-html="content"></div>
    <ProductSeries :list="categoryProducts" />
    <ProductCategories />
  </div>
</template>

<script>
import { Breadcrumb, ProductCategories } from '~/components/Common'
import { ProductSeries } from '~/components/Product'
export default {
  name: 'CategoryPage',
  components: { Breadcrumb, ProductCategories, ProductSeries },
  async asyncData({ store, params }) {
    let category = {}
    let categoryProducts = {}
    try {
      category = await store.dispatch('categories/fetchById', params.id)
      categoryProducts = await store.dispatch('categories/products', params.id)
    } catch (e) {}
    return {
      category,
      categoryProducts
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: this.description
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
