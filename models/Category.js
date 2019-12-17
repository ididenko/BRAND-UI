import H from '~/helper'
import Product from '~/models/Product'

export default class Category {
  constructor(obj = {}) {
    this.id = !H.isEmpty(obj, 'id') ? obj.id : null
    this.title = !H.isEmpty(obj, 'catagoryName') ? obj.catagoryName : ''
    this.description = !H.isEmpty(obj, 'description') ? obj.description : ''
    this.image = !H.isEmpty(obj, 'imageFilePath') ? obj.imageFilePath : ''
    this.products =
      !H.isEmpty(obj) && obj.products.length
        ? obj.products.map(p => new Product(p))
        : []
    this.createdAt = !H.isEmpty(obj, 'createdAt') ? obj.createdAt : null
    this.updatedAt = !H.isEmpty(obj, 'updatedAt') ? obj.updatedAt : null
  }
}
