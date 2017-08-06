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

const addHandlers = function () {
  $('#multipart-form-data').on('submit', createUploadMultiPart)
  $('#showUploadsButton').on('click', onGetUploads)
}

module.exports = {
  createUploadMultiPart,
  onGetUploads,
  addHandlers
}
