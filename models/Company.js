import H from '~/helper'

export default class Company {
  constructor(obj = {}) {
    this.id = !H.isEmpty(obj) && obj.id ? obj.id : null
  }
}
