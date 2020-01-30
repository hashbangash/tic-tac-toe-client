'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')

$('#create-book').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)
  console.log(bookData)
})

/*
{
  book: {
    title: "<whatever was entered in the title input >",
    author: "<whatever was entered in the author input>"
  }
}
*/

module.export = {

}
