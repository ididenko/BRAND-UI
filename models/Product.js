import H from '~/helper'
import Series from '~/models/Product'

export default class Product {
  constructor(obj = {}) {
    this.id = !H.isEmpty(obj, 'id') ? obj.id : null
    this.article = !H.isEmpty(obj, 'article') ? obj.article : false
    this.slug = !H.isEmpty(obj, 'slug') ? obj.slug : null
    this.isActive = !H.isEmpty(obj, 'isActive') ? obj.isActive : false
    this.price = !H.isEmpty(obj, 'price') ? +obj.price : 0
    this.title = !H.isEmpty(obj, 'title') ? obj.title : ''
    this.description = !H.isEmpty(obj, 'description') ? obj.description : ''
    this.color = !H.isEmpty(obj, 'color') ? obj.color : ''
    this.size = !H.isEmpty(obj, 'size') ? obj.size : ''
    this.functions = !H.isEmpty(obj, 'functions') ? obj.functions : []
    this.image = !H.isEmpty(obj, 'image') ? obj.image : ''
    this.images = !H.isEmpty(obj, 'images') ? obj.images : []
    this.series =
      !H.isEmpty(obj) && obj.series.length
        ? obj.series.map(p => new Series(p))
        : []
    this.createdAt = !H.isEmpty(obj, 'createdAt') ? obj.createdAt : null
    this.updatedAt = !H.isEmpty(obj, 'updatedAt') ? obj.updatedAt : null
  }
}
