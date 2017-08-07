const getFormFields = require(`../../../lib/get-form-fields`)
const uploadApi = require('./api')
const uploadUi = require('./ui')

const createUploadMultiPart = function (event) {
  event.preventDefault()
  console.log('it did something in multipart')
  const data = new FormData(event.target)
  uploadApi.createMulti(data)
    .then(uploadUi.success)
    .catch(uploadUi.error)
}

const onGetUploads = function (event) {
  uploadApi.getUploads()
  .then(uploadUi.success)
  .catch(uploadUi.failure)
}

const onGetOneUpload = function (event) {
  uploadApi.getOneUpload()
  .then(uploadUi.success)
  .catch(uploadUi.failure)
}

const onDeleteUpload = function (event) {
  console.log('this is: ', this)
  console.log('this.dataset is: ', this.dataset)
  console.log('this.dataset.id is: ', this.dataset.id)
  uploadApi.deleteUpload(this.dataset.id)
    .then(uploadUi.success)
    .catch(uploadUi.deleteFailure)
}

const onUpdateUpload = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  uploadApi.updateUpload(data)
    .then(uploadUi.succes)
    .catch(uploadUi.failure)
}

// Adding listeners below
const addHandlers = function () {
  $('#multipart-form-data').on('submit', createUploadMultiPart)
  $('#showUploadsButton').on('click', onGetUploads)
  $('#vault').on('click', '.remove-button', onDeleteUpload)
  // $('#vault').on('click', '.update-button', onUpdateUpload)
}

module.exports = {
  createUploadMultiPart,
  onGetUploads,
  onGetOneUpload,
  onDeleteUpload,
  onUpdateUpload,
  addHandlers
}
