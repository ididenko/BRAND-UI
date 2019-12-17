import Vue from 'vue'
import { mask } from 'vue-the-mask'

Vue.directive('focus', {
  // Когда привязанный элемент вставлен в DOM...
  inserted(el) {
    // Переключаем фокус на элемент
    el.focus()
  }
})

Vue.directive('mask', mask)
