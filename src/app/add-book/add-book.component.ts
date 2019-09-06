import { Component, OnInit } from '@angular/core';
import { FormBook } from '../form-book'
import { Books } from '../mock-books'

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['../app.component.css']
})
export class AddBookComponent {
    constructor() {
    }
    
    title = 'Add books'
    books = Books
    bookLength = this.books.length

    addForm: FormBook = {
        id: null,
        name: '',
        author: '',
        year_released: ''
      }
    
    addBook(): void {
        if(!Object.values(this.addForm).length) return
        this.bookLength++
        this.books.push({id: this.bookLength, ...this.addForm}) //so will not mutate
        this.clearForm()
      }

    clearForm(): void {
        this.addForm = {
            id: null,
            name: '',
            author: '',
            year_released: ''
        }
  }
}