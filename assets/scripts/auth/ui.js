'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data.user.email)
}

const signUpFailure = () => {
  console.log('incorrect credentials')
}

const signInSuccess = (data) => {
  console.log(data.user.email)
}

const signInFailure = () => {
}

const changePasswordSuccess = () => {
  console.log('CP success')
}

const changePasswordFailure = () => {
}

const signOutSuccess = () => {
  console.log('signout success')
}

const signOutFailure = () => {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
