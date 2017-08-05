'use strict'
const store = require('../store')

const signUpFailure = () => {
  console.log('incorrect credentials')
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('Sign In Success!')
  console.log(data.user)
}

const signInFailure = () => {
}

const changePasswordSuccess = (data) => {
  console.log('Change Password Success!')
  console.log(data)
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
