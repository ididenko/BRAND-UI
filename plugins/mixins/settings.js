import Vue from 'vue'

import { mapGetters } from 'vuex'

const Settings = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters(['settings'])
      }
    })
  }
}

Vue.use(Settings)
