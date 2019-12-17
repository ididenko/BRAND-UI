<template>
  <div>
    <span>代表メッセージ</span>
    <div v-html="message.content"></div>
    <div class="image">
      <img :src="message.image" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RepresentativeMessage',
  data() {
    return {
      form: {
        message: ''
      }
    }
  },
  async created() {
    try {
      this.message = await this.getRepresentativeMessage()
    } catch (e) {}
  },
  methods: {
    ...mapActions({
      getRepresentativeMessage: 'company/RepresentativeMessage'
    })
  }
}
</script>
