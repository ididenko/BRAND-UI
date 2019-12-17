export default class Helper {
  static isEmpty(obj, key = '') {
    if (typeof key === 'string' && key.length && Object.keys(obj).length) {
      return !Object.prototype.hasOwnProperty.call(obj, key)
    }
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  static prepareUrl(link, protocol = false) {
    const expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]+$/gi
    const regex = new RegExp(expression)
    let nlink = ''

    if (link.length && link.match(regex)) {
      nlink = link.replace(/^(https?:|)\/\//, '')
      if (protocol) {
        nlink = `https://${nlink}`
      }
    }
    return nlink
  }

  static appendFormData(obj) {
    const data = new FormData()

    if (!this.isEmpty(obj)) {
      for (const key in obj) {
        const field = obj[key]
        if (key === 'files' && field.length) {
          for (let i = 0; i < field.length; i++) {
            data.append('files[]', field[i])
          }
          continue
        }
        switch (field) {
          case true:
            data.append(key, 1)
            break
          case false:
            data.append(key, 0)
            break
          case null:
            break
          default:
            data.append(key, field)
        }
      }
    }
    return data
  }
}
