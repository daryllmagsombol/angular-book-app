import { Component, OnInit } from '@angular/core';
import { FormBook } from '../form-book'
import { Books } from '../mock-books'

@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book-component.html',
    styleUrls: ['../app.component.css']
})
export class EditBookComponent {
    constructor() {
    }
    
    title = 'Edit books'
    books = Books
    bookLength = this.books.length
    selected_book = 'none'

    editForm: FormBook = {
        id: null,
        name: '',
        author: '',
        year_released: ''
      }
      
    editBook(): void {
        if(!Object.values(this.editForm)) return
        let processedBooks = this.books.map((book)=>{
          if (book.id == this.editForm.id) book = {...this.editForm}
          return book
        })  
        this.books = processedBooks
      }

    clearForm(): void {
        this.editForm = {
            id: null,
            name: '',
            author: '',
            year_released: ''
        }
  }
}