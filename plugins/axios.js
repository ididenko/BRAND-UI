export default function({ $axios, store, redirect, error }) {
  $axios.onError(err => {
    const code = parseInt(err.response && err.response.status)
    const errs = prepareErrors(err.response)

    if (code === 422) {
      store.dispatch('validation/setErrors', errs)
    }

    if (code === 404 || code >= 500) {
      store.dispatch('validation/setErrors', errs)
      error(errs)
    }

    if (code === 403) {
      store.dispatch('validation/setErrors', {
        message: "Forbidden! You can't do this action",
        fields: null,
        statusCode: 403
      })
    }
    // return Promise.reject(error)
  })

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })

  const prepareErrors = function(response) {
    const errors = {
      message: response.data.errors.message || '',
      fields: response.data.errors.fields || null,
      statusCode: response.status
    }
    console.log(errors)
    return errors
  }
}
