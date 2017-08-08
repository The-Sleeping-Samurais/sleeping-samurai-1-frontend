const getFormFields = require(`../../../lib/get-form-fields`)
const uploadApi = require('./api')
const uploadUi = require('./ui')

const createUploadMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')
  const data = new FormData(event.target)
  uploadApi.createMulti(data)
    .then(uploadUi.createSuccess)
    .catch(uploadUi.createFailure)
}

const onGetUploads = function (event) {
  $('.content').empty()
  uploadApi.getUploads()
  .then(uploadUi.onGetUploadsSuccess)
  .catch(uploadUi.failure)
}

// const onGetOneUpload = function (event) {
//   uploadApi.getOneUpload()
//   .then(uploadUi.success)
//   .catch(uploadUi.failure)
// }

// gets the users uploads
const onGetMyUploads = function (event) {
  $('.content').empty()
  uploadApi.getMyUploads()
  .then(uploadUi.onGetMyUploadsSuccess)
  .catch(uploadUi.failure)
}

const onDeleteUpload = function (event) {
  console.log('this is: ', this)
  console.log('this.dataset is: ', this.dataset)
  console.log('this.dataset.id is: ', this.dataset.id)
  uploadApi.deleteUpload(this.dataset.id)
    .then(() => {
      uploadUi.success
      onGetUploads()
    })
    .catch(uploadUi.deleteFailure)
}

const openUpdateModal = function () {
  const fileName = $(this).attr('data-name')
  const fileDes = $(this).attr('data-des')
  const fileTag = $(this).attr('data-tag')
  const fileId = $(this).attr('data-id')
  $('.edit-upload-message-board').text('')
  $('#fileName').val(fileName)
  $('#fileDes').val(fileDes)
  $('#fileTag').val(fileTag)
  $('#fileId').text(fileId)
  // $('#updateSubmit').data(id, fileId)
}

const onUpdateUpload = function (event) {
  const id = $('#fileId').text()
  const data = getFormFields(event.target)
  event.preventDefault()
  uploadApi.updateUpload(data, id)
    .then(uploadUi.updateSuccess)
    .catch(uploadUi.updateFailure)
}

// Adding listeners below
const addHandlers = function () {
  $('#multipart-form-data').on('submit', createUploadMultiPart)
  $('#showUploadsButton').on('click', onGetUploads)
  $('#vault').on('click', '.remove-button', onDeleteUpload)
  $('#showMyUploadsButton').on('click', onGetMyUploads)
  $('#edit-upload-form').on('submit', onUpdateUpload)
  $('#vault').on('click', '.update-button', openUpdateModal)
}

module.exports = {
  createUploadMultiPart,
  onGetUploads,
  onDeleteUpload,
  onUpdateUpload,
  onGetMyUploads,
  addHandlers
}
