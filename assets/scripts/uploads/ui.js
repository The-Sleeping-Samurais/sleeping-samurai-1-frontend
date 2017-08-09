'use strict'
const store = require('../store')
const browseTemplate = require('../templates/browse-uploads.handlebars')
const editableTemplate = require('../templates/show-uploads.handlebars')
const imageTemplate = require('../templates/show-images.handlebars')

const onGetUploadsSuccess = function (data) {
  let imageArray = filterDataForImg(data.uploads)
  const uploadsHtml = browseTemplate({ uploads: data.uploads })
  $('#vault').append(uploadsHtml)
  $('#vault').show(1000)
  const imageHtml = imageTemplate({ uploads: imageArray })
  $('#image-board').append(imageHtml)
  // $('#vault').show(1000)
  $('.buttons').hide()
}

// const onGetMyUploadsSuccess = function (data) {
//   const uploadsHtml = editableTemplate({ uploads: data.uploads })
//   $('#vault').append(uploadsHtml)
//   $('#vault').show(1000)
//   $('.buttons').show()
// }
const onGetMyUploadsSuccess = function (data) {
  let imageArray = filterDataForImg(data.uploads)
  const uploadsHtml = editableTemplate({ uploads: data.uploads })
  $('#vault').append(uploadsHtml)
  $('#vault').show(1000)
  const imageHtml = imageTemplate({ uploads: imageArray })
  $('#image-board').append(imageHtml)
  // $('#vault').show(1000)
  $('.buttons').show()
}

const deleteFailure = function (data, error) {
  // const uploadsHtml = uploadsTemplate({ uploads: data.uploads })
  // $('#vault').append(uploadsHtml)
}

const createSuccess = function (data) {
  $('.create-message-board').text('Successfully uploaded file.')
  $('.create-upload').val('')
}

const createFailure = function (data, error) {
  $('.create-message-board').text('Error uploading.')
}

const updateSuccess = function (data) {
  // $('.edit-upload-message-board').text('Successful update.')
  $('#editModal').modal('hide')
}

const updateFailure = function (data, error) {
  $('.edit-upload-message-board').text('Incorrect credentials.')
}

const error = function (error) {
}

// This is Kai's genius
const filterDataForImg = function (dataArray) {
  let filteredData = []
  for (let i = 0; i < dataArray.length; i++) {
    let url = dataArray[i].url
    let urlEnd = url.substr(url.length -3)
    if (urlEnd === 'png' || urlEnd === 'peg' || urlEnd === 'jpg' || urlEnd === 'svg') {
      filteredData.push(dataArray[i])
    }
  }
  return filteredData
    // if (dataArray[i].url === 'png') {
    // }
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
