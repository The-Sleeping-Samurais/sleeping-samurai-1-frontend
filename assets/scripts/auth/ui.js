'use strict'
const store = require('../store')
const uploadActions = require('../uploads/events.js')

const signUpFailure = () => {
  $('.sign-up-message-board').text('Problem signing up')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-up-modal').modal('hide')
  $('.sign-up').val('')
  $('#sign-in-modal').modal('hide')
  $('.sign-in').val('')
  $('#showUploadsButton').show()
  $('#showMyUploadsButton').show()
  $('#createUploadButton').show()
  $('#sign-out').show()
  $('#changePasswordButton').show()
  $('.upload').show()
  $('#signUpButton').hide()
  $('#signInButton').hide()
  $('.cover').hide()
  // $('#mySidenav').show()
  $('#top-nav').show()
  $('#sidebar-wrapper').show()
  $('.sign-up-message-board').text('')
  $('.sign-in-message-board').text('')
  $('#messageBoard').show()
  $('#imageButton').show()
  $('#fileButton').show()
  $('#mainContainer').show()
  uploadActions.onGetMyUploads()
  $('#change-password-message-board').text('')
}

const signInFailure = () => {
  $('.sign-in-message-board').text('Incorrect credentials.')
  $('.sign-in').val('')
}

const changePasswordSuccess = (data) => {
  $('.change-password-message-board').text('Password Changed.')
  $('.change-password').val('')
  // $('#change-password-modal').modal('hide')
}

const changePasswordFailure = () => {
  $('.change-password-message-board').text('Incorrect credentials.')
  $('.change-password').val('')
}

const signOutSuccess = () => {
  $('#signUpButton').show()
  $('#signInButton').show()
  $('#sign-out').hide()
  $('#changePasswordButton').hide()
  $('#showUploadsButton').hide()
  $('#showMyUploadsButton').hide()
  $('#createUploadButton').hide()
  $('.cover').show()
  $('.upload').hide()
  $('#vault').hide()
  $('.content').empty()
  $('#top-nav').hide()
  $('#sidebar-wrapper').hide()
  $('#messageBoard').text('My Uploads')
  $('.create-message-board').text('')
  $('.create-upload').val('')
  $('#messageBoard').hide()
  $('#imageButton').hide()
  $('#fileButton').hide()
  $('#mainContainer').hide()
  $('.change-password-message-board').text('')
  $('.change-password-message-board').text('')
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
