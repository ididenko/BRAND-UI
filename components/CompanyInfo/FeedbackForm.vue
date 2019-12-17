<template>
  <div>
    <div slot="header">
      お問い合わせ
    </div>
    <div slot="form">
      お問い合わせ
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FeedbackForm',
  data() {
    return {
      form: {
        corporateName: '',
        name: '',
        nameHiragana: '',
        phone: '',
        email: '',
        content: '',
        comment: ''
      }
    }
  },
  methods: {
    ...mapActions({
      feedback: 'company/feedback'
    }),
    async send() {
      try {
        await this.feedback(this.form)
        this.showBasicDialog()
      } catch (e) {}
    },
    showBasicDialog() {
      this.$bvModal.msgBoxOk('You message was send', {
        title: 'Company Information'
      })
    }
  }
}
</script>
