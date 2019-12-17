<template>
  <div>
    <HomeBanner />
    <nuxt />
    <PageTop />
    <ProductList />
    <TheFooter />
    <CookiesNotification />
  </div>
</template>

<script>
import { PageTop, ProductList, TheFooter } from '~/components/Common'
import CookiesNotification from '~/components/CookiesNotification'
import HomeBanner from '~/components/HomeBanner'
export default {
  name: 'HomeLayout',
  components: {
    HomeBanner,
    CookiesNotification,
    PageTop,
    ProductList,
    TheFooter
  }
}
</script>

<style scoped></style>
