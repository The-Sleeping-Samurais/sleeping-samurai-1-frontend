'use strict'

const config = require('../config.js')

const createMulti = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/uploads',
    method: 'POST',
    data,
    processData: false,
    contentType: false
  })
}

module.exports = {
  createMulti
}
