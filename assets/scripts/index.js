'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const uploadEvents = require('./uploads/events')
const dt = require('datatables.net')

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
    // $('#imageButton').toggleClass('btn-primary')
    // $('#fileButton').toggleClass('btn-secondary')
  })
  $('#fileButton').on('click', function () {
    $('#image-board').hide()
    $('#vault').show()
    // $('#fileButton').toggleClass('btn-primary')
    // $('#imageButton').toggleClass('btn-secondary')
  })
  $('#showUploadsButton').on('click', function () {
    $('#messageBoard').text('All Uploads')
  })
  $('#showMyUploadsButton').on('click', function () {
    $('#messageBoard').text('My Uploads')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
