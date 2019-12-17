import H from '~/helper'

export default class StaticPage {
  constructor(obj = {}) {
    this.id = !H.isEmpty(obj) && obj.id ? obj.id : null
    this.slug = !H.isEmpty(obj) && obj.slug ? obj.slug : 'no-slug'
    this.title = !H.isEmpty(obj) && obj.title ? obj.title : ''
    this.h1 = !H.isEmpty(obj) && obj.pageTitle ? obj.pageTitle : this.title
    this.description = !H.isEmpty(obj) && obj.description ? obj.description : ''
    this.content = !H.isEmpty(obj) && obj.content ? obj.content : ''
  }
}
