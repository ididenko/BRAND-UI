<template>
  <main></main>
</template>

<script>
import Product from '~/models/Product'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Product,
      required: true,
      default: new Product()
    }
  }
}
</script>
