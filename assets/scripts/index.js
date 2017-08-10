'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const uploadEvents = require('./uploads/events')
// const dt = require('datatables.net')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  uploadEvents.addHandlers()
  $('#sign-out').hide()
  $('#showUploadsButton').hide()
  $('#showMyUploadsButton').hide()
  $('#changePasswordButton').hide()
  $('#createUploadButton').hide()
  // $('.upload').hide()
  $('#vault').hide()
  $('#top-nav').hide()
  $('#sidebar-wrapper').hide()
  $('#imageButton').on('click', function () {
    $('#vault').hide()
    $('#image-board').show()
    $('#imageButton').css("border", "thin solid green")
    $('#fileButton').css("border", "none")
  })
  $('#fileButton').on('click', function () {
    $('#image-board').hide()
    $('#vault').show()
    $('#fileButton').css("border", "thin solid green")
    $('#imageButton').css("border", "none")
  })
  $('#showUploadsButton').on('click', function () {
    $('#messageBoard').text('Browsing')
  })
  $('#showMyUploadsButton').on('click', function () {
    $('#messageBoard').text('My Uploads')
  })
  $('#messageBoard').hide()
  $('#imageButton').hide()
  $('#fileButton').hide()
  $('#mainContainer').hide()
  $('#showUploadsButton').on('click', function () {
    $('#secondMessageBoard').text('')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
