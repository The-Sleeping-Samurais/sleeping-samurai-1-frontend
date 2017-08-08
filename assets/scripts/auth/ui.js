'use strict'
const store = require('../store')

const signUpFailure = () => {
  $('.sign-up-message-board').text('Incorrect Credentials')
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('Sign In Success!')
  console.log(data.user)
  $('#sign-up-modal').modal('hide')
  $('.sign-up').val('')
  $('#sign-in-modal').modal('hide')
  $('.sign-in').val('')
  $('#showUploadsButton').show(1000)
  $('#showMyUploadsButton').show(1000)
  $('#sign-out').show(1000)
  $('#changePasswordButton').show(1000)
  $('.upload').show(1000)
  $('#vault').show(1000)
  $('#signUpButton').hide(1000)
  $('#signInButton').hide(1000)
  $('.jumbotron').hide(1000)
}

const signInFailure = () => {
  $('.sign-in-message-board').text('Incorrect credentials.')
  $('.sign-in').val('')
}

const changePasswordSuccess = (data) => {
  console.log('Change Password Success!')
  console.log(data)
  $('.change-password-message-board').text('Successfully changed password.')
  // $('#change-password-modal').modal('hide')
  $('.change-password').val('')
}

const changePasswordFailure = () => {
}

const signOutSuccess = () => {
  console.log('signout success')
  $('#signUpButton').show(1000)
  $('#signInButton').show(1000)
  $('#sign-out').hide(1000)
  $('#changePasswordButton').hide(1000)
  $('#showUploadsButton').hide(1000)
  $('#showMyUploadsButton').hide(1000)
  $('.jumbotron').show(1000)
  $('.upload').hide(1000)
  $('#vault').hide(1000)
  $('.content').empty()
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
