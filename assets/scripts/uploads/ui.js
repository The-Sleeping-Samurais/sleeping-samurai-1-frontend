'use strict'
const store = require('../store')
const uploadsTemplate = require('../templates/table-uploads.handlebars')

const success = function (data) {
  console.log('success data is:', data)
  const uploadsHtml = uploadsTemplate({ uploads: data.uploads })
  $('#vault').append(uploadsHtml)
}

const deleteFailure = function (data, error) {
  console.log('delete data is:', data)
  console.log('store.user.token is:', store.user.token)
  console.error('error is:', error)
  // const uploadsHtml = uploadsTemplate({ uploads: data.uploads })
  // $('#vault').append(uploadsHtml)
}

const error = function (error) {
  console.log('error is:', error)
}

module.exports = {
  success,
  error,
  deleteFailure
}
