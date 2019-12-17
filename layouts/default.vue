<template>
  <div>
    <TheHeader />
    <nuxt />
    <PageTop />
    <ProductList />
    <TheFooter />
    <CookiesNotification />
  </div>
</template>

<script>
import { PageTop, ProductList, TheHeader, TheFooter } from '~/components/Common'
import CookiesNotification from '~/components/CookiesNotification'
export default {
  name: 'DefaultLayout',
  components: {
    CookiesNotification,
    PageTop,
    ProductList,
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped></style>
