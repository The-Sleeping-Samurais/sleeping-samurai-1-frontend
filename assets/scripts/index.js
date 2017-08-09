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
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
