<template>
  <b-card v-if="!accepted" no-body class="cookies">
    <b-card-body>
      <p>
        クッキーを使用して、お客様が当社のサイトで最高の体験を得られるようにします。
        [とった]をクリックすると、Cookieの使用に同意したことになります。
      </p>
      <b-link :to="{ name: 'privacy-policy' }" variant="link" class="px-0">
        個人情報保護方針
      </b-link>
      <b-button
        variant="primary"
        class="px-4 float-right"
        @click.prevent="close"
      >
        とった
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CookiesNotification',
  data() {
    return {
      accepted: false
    }
  },
  created() {
    this.accepted = !!this.$cookies.get('acceptedCookiesUsage')
  },
  methods: {
    close() {
      this.accepted = true
      this.$cookies.set('acceptedCookiesUsage', true, { sameSite: true })
    }
  }
}
</script>

<style scoped lang="scss">
.cookies {
  position: fixed;
  bottom: 40px;
  left: 46px;
  color: #484747;
  height: auto;
  width: 100%;
  max-width: 538px;
  box-shadow: 3.5px 3.5px 12px 0 rgba(144, 142, 142, 0.19);
  font-size: 15px;
  z-index: 99999;
}

@media screen and (max-width: 580px) {
  .cookies {
    bottom: 0;
    left: 0;
  }
}
</style>
