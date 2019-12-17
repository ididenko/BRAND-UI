<template>
  <div>
    <div slot="header">
      会社概要
    </div>
    <div slot="list">
      <ul>
        <li v-for="(item, index) in companyData" :key="index">
          <span class="title">{{ item.title }}</span>
          <span class="description">{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CompanyProfile',
  data() {
    return {
      companyData: []
    }
  },
  async created() {
    try {
      this.companyData = await this.getCompanyProfileInfo()
    } catch (e) {}
  },
  methods: {
    ...mapActions({
      getCompanyProfileInfo: 'company/getProfile'
    })
  }
}
</script>
