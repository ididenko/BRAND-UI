<template>
  <ol class="breadcrumb">
    <li>
      <nuxt-link to="/">TOP</nuxt-link>
    </li>
    &nbsp;/&nbsp;
    <li
      v-for="(routeObject, index) in routeRecords"
      :key="index"
      class="breadcrumb-item"
    >
      <span v-if="isLast(index)" class="active">{{
        getName(routeObject)
      }}</span>
      <nuxt-link v-else :to="routeObject">{{ getName(routeObject) }}</nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    routeRecords() {
      return this.list.filter(route => route.name || route.meta.label)
    }
  },
  methods: {
    getName(item) {
      return item.meta && item.meta.label ? item.meta.label : item.name || null
    },
    isLast(index) {
      return index === this.list.length - 1
    }
  }
}
</script>
