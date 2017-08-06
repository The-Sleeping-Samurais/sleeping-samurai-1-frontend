'use strict'

const config = require('../config.js')
const store = require('../store')

const createMulti = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/uploads',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data,
    processData: false,
    contentType: false
  })
}

module.exports = {
  createMulti
}
