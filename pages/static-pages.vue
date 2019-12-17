<template>
  <div class="container">
    <Breadcrumb :list="[$route]" />
    <h1>
      {{ h1 }}
    </h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import Page from '~/models/StaticPage'
import { Breadcrumb } from '~/components/Common'
export default {
  name: 'StaticPages',
  components: { Breadcrumb },
  async asyncData({ store, route }) {
    let data = {}
    try {
      data = await store.dispatch('static-pages/fetch', route.path)
    } catch (e) {}
    return {
      ...new Page(data)
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
