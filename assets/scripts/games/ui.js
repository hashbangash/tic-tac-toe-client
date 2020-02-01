'use strict'

// contains the jQuery to update the webpage

const onCreateGameSuccessful = responseData => {
  $('#game-board').show()
  $('#message').text('created game')
  $('#message').addClass('successful')
}

const onCreateGameFailure = () => {
  $('#message').text('failed to create game😭')
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
// const onUpdateBookSuccessful = responseData => {
//   $('#message').text('updated book')
//   $('#message').addClass('successful')
// }
//
// const onUpdateBookFailure = () => {
//   $('#message').text('failed to update book😭')
//   $('#message').addClass('failure')
// }

module.exports = {
  onCreateGameSuccessful,
  onCreateGameFailure
}
