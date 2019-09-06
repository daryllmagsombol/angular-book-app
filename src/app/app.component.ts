import { Component, OnInit } from '@angular/core';

import { FormBook } from './form-book'
import { Books } from './mock-books'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() { }
 
  ngOnInit() {
  
  }

  title = 'Book Store';
  books = Books
//   bookLength = this.books.length

//   addForm: FormBook = {
//     id: null,
//     name: '',
//     author: '',
//     year_released: ''
//   }

//  editForm: FormBook = {
//     id: null,
//     name: '',
//     author: '',
//     year_released: ''
//   }
  
selected_book = 'none'

//   addBook(): void {
//     if(!Object.values(this.addForm).length) return
//     this.bookLength++
//     this.books.push({id: this.bookLength, ...this.addForm}) //so will not mutate
//     this.clearForm()
//   }

//   deleteBook(id): void {
//     let processedBooks = this.books.filter((book)=>{
//       return book.id != id
//     })
//     this.books = processedBooks
//   }

//   selectBook(id): void {
//     let selectedBook = this.books.find((book)=>{
//       return book.id == id
//     })
//     this.editForm = {...selectedBook}
//   }

//   editBook(): void {
//     if(!Object.values(this.editForm)) return
//     let processedBooks = this.books.map((book)=>{
//       if (book.id == this.editForm.id) book = {...this.editForm}
//       return book
//     })  
//     this.books = processedBooks
//   }

//   clearForm(): void {
//     this.clearAddForm()
//     this.clearEditForm()
//   }

//   clearAddForm(): void {
//     this.addForm = {
//       id: null,
//       name: '',
//       author: '',
//       year_released: ''
//     }
//   }
//   clearEditForm(): void {
//     this.editForm = {
//       id: null,
//       name: '',
//       author: '',
//       year_released: ''
//     }
//   }
}
