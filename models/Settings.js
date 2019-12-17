export default class Settings {
  constructor(obj = {}) {
    if (Object.keys(obj).length) {
      obj.forEach(item => {
        const key = item.key
          .split('_')
          .map((v, i) => (i === 0 ? v : v.charAt(0).toUpperCase() + v.slice(1)))
          .join('')

        let v = ''
        switch (item.type) {
          case 'boolean':
            v = Boolean(item.value) || false
            break
          case 'integer':
          case 'float':
            v = +item.value || 0
            break
          default:
            v = item.value
        }
        this[key] = v
      })
    }
  }

  fetch(k) {
    return this[k] ? this[k] : false
  }
}
