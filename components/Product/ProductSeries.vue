<template>
  <section v-if="list.length">
    <ul>
      <li v-for="product in list" :key="product.id">
        <nuxt-link :to="{ name: 'product', params: { id: product.id } }">
          <strong>{{ product.article }}</strong>
          <span>{{ product.title }}</span>
          <img :src="product.image" :alt="product.title" />
          <span v-if="product.color.length">
            {{ product.color.length }} color
          </span>
          <span>{{ product.price | currency }}</span>
          <span v-if="product.color.length">
            <i class="icon-arrow-right"></i>
            <ul>
              <li v-for="color in product.color" :key="color.id">
                <img :src="color.path" />
                <span>{{ color.title }}</span>
              </li>
            </ul>
          </span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ProductSeries',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
