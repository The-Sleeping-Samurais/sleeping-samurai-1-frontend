'use strict'
const store = require('../store')
const uploadTemplate = require('../templates/show-upload.handlebars')

const success = function (data) {
  console.log('success data is:', data)
  const uploadHTML = uploadTemplate({ upload: data.upload })
  $('#uploadsBoard').append(uploadHTML)
}

const error = function (error) {
  console.log('error is:', error)
}

module.exports = {
  success,
  error
}
