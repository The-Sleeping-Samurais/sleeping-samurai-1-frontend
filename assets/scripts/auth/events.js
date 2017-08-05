const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(function (response) {
      const loginData = {
        credentials: {
          email: data.credentials.email,
          password: data.credentials.password
        }
      }
      api.signIn(loginData)
        .then(ui.signInSuccess)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  onSignUp,
  onSignIn,
  addHandlers
}
