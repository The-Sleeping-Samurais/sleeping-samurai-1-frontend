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

const getUploads = function () {
  return $.ajax({
    url: config.apiOrigin + '/uploads/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneUpload = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/uploads/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getMyUploads = function () {
  return $.ajax({
    url: config.apiOrigin + '/useruploads/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteUpload = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/uploads/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateUpload = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/uploads/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createMulti,
  getUploads,
  getOneUpload,
  deleteUpload,
  updateUpload,
  getMyUploads
}
