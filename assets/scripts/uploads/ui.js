'use strict'
const store = require('../store')
const browseTemplate = require('../templates/browse-uploads.handlebars')
const editableTemplate = require('../templates/show-uploads.handlebars')

const onGetUploadsSuccess = function (data) {
  console.log('success data is:', data)
  const browseHtml = browseTemplate({ uploads: data.uploads })
  $('#vault').append(browseHtml)
  $('#vault').show(1000)
  $('.buttons').hide()
}

const onGetMyUploadsSuccess = function (data) {
  console.log('success data is:', data)
  const uploadsHtml = editableTemplate({ uploads: data.uploads })
  $('#vault').append(uploadsHtml)
  $('#vault').show(1000)
  $('.buttons').show()
}

const deleteFailure = function (data, error) {
  console.log('delete data is:', data)
  console.log('store.user.token is:', store.user.token)
  console.error('error is:', error)
  // const uploadsHtml = uploadsTemplate({ uploads: data.uploads })
  // $('#vault').append(uploadsHtml)
}

const createSuccess = function (data) {
  $('.create-message-board').text('Successfully uploaded file.')
  $('.create-upload').val('')
  console.log('success data is:', data)
}

const createFailure = function (data, error) {
  $('.create-upload-message-board').text('Error uploading.')
}

const updateSuccess = function (data) {
  // $('.edit-upload-message-board').text('Successful update.')
  $('#editModal').modal('hide')
}

const updateFailure = function (data, error) {
  $('.edit-upload-message-board').text('Incorrect credentials.')
}

const error = function (error) {
  console.log('error is:', error)
}

module.exports = {

  error,
  deleteFailure,
  updateFailure,
  updateSuccess,
  createFailure,
  createSuccess,
  onGetUploadsSuccess,
  onGetMyUploadsSuccess
}
