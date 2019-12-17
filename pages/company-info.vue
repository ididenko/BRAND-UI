<template>
  <div class="container">
    <Breadcrumb :list="[$route]" />
    <h1>
      {{ h1 }}
    </h1>
    <RepresentativeMessage />
    <CompanyProfile />
    <GoogleMap />
    <FeedbackForm />
  </div>
</template>

<script>
import {
  RepresentativeMessage,
  CompanyProfile,
  FeedbackForm,
  GoogleMap
} from '~/components/CompanyInfo'
import { Breadcrumb } from '~/components/Common'
export default {
  name: 'CompanyInformation',
  components: {
    RepresentativeMessage,
    CompanyProfile,
    FeedbackForm,
    GoogleMap,
    Breadcrumb
  },
  data() {
    return {
      h1: 'Company Information',
      title: '企業情報',
      description: '企業情報 | SHINMEN'
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
