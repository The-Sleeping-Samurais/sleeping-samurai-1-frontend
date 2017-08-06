'use strict'
const store = require('../store')

const signUpFailure = () => {
  console.log('incorrect credentials')
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('Sign In Success!')
  console.log(data.user)
  $('#sign-up-modal').modal('hide')
  $('.sign-up').val('')
  $('#sign-in-modal').modal('hide')
  $('.sign-in').val('')
}

const signInFailure = () => {
}

const changePasswordSuccess = (data) => {
  console.log('Change Password Success!')
  console.log(data)
  $('#change-password-modal').modal('hide')
  $('.change-password').val('')
}

const changePasswordFailure = () => {
}

const signOutSuccess = () => {
  console.log('signout success')
}

const signOutFailure = () => {
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
