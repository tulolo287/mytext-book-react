const { Op } = require('sequelize');
const Book = require('../model/Book')

class BookController {
   async getBooks(query) {
      try {
         const books = await Book.findAll({
            where: {
               title: {
                  [Op.iLike]: `%${query.q}%`
               }
            }
         })
         return books
      } catch (error) {
         console.log(error)
      }
   }

   async getBook(id) {
      try {
         const book = await Book.findOne({
            where: {
               id
            }
         })
         return book
      } catch (error) {
         console.log(error)
      }
   }
}

const bookController = new BookController()
module.exports = bookController
