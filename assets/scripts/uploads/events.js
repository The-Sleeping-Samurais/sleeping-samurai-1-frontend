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

module.exports = {
  createUploadMultiPart
}
