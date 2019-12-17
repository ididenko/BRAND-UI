<template>
  <div @click="scrollToTop">
    Page top
    <i class="icon-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: 'PageTop',
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped></style>
