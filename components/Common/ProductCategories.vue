<template>
  <div v-if="categories.length">
    <div slot="header">
      SLASH/PRODUCT:CATEGORY
    </div>
    <div slot="list">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link :to="{ name: 'category', params: { id: category.id } }">
            <img :src="category.image" :alt="category.title" />
            <span>{{ category.title }}</span>
            <span>{{ category.smallTitle }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductCategories',
  data() {
    return {
      categories: []
    }
  },
  async created() {
    try {
      this.categories = await this.fetch()
    } catch (e) {}
  },
  methods: {
    ...mapActions({
      fetch: 'categories/fetch'
    })
  }
}
</script>
