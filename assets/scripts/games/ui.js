'use strict'

const store = require('./../store')

// contains the jQuery to update the webpage

const onCreateGameSuccess = function (response) {
  $('#message').text(`successfully clicked play!`)
  $('#game-board').show()
  console.log('response after game created: ', response)
  store.game = response.game
  console.log('store after game created: ', store)
}
const onCreateGameFailure = function (response) {
  $('#message').text(`try again.`)
}

const onUpdateGameSuccess = responseData => {
  $('#message').text('added move')
  $('#message').addClass('successful')
  $(`[data-cell-index='${store.move.index}']`).text(store.move.player)
}

const onUpdateGameFailure = () => {
  $('#message').text('failed to update book😭')
  $('#message').addClass('failure')
}

// const onGetBooksSuccessful = responseData => {
//   console.log(responseData.books)
//   let allBooksHtml = ''
//   responseData.books.forEach(book => {
//     const bookHtml = `
//       <h3>${book.title}</h3>
//       <h4>by ${book.author}</h4>
//       <h5>id: ${book.id}</h5>
//     `
//
//     allBooksHtml += bookHtml
//   })
//   $('#book-display').html(allBooksHtml)
// }
//
// const onGetBooksFailure = () => {
//   $('#message').text('failed to get books😭')
//   $('#message').addClass('failure')
// }
//
// const onGetBookSuccessful = responseData => {
//   const book = responseData.book
//   const bookHtml = `
//   <h3>${book.title}</h3>
//   <h4>by ${book.author}</h4>
//   <h5>id: ${book.id}</h5>
//   `
//   $('#book-display').html(bookHtml)
// }
//
// const onGetBookFailure = () => {
//   $('#message').text('failed to get book😭')
//   $('#message').addClass('failure')
// }
//
// const onDeleteBookSuccessful = responseData => {
//   $('#message').text('deleted book')
//   $('#message').addClass('successful')
// }
//
// const onDeleteBookFailure = () => {
//   $('#message').text('failed to delete book😭')
//   $('#message').addClass('failure')
// }
//

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
