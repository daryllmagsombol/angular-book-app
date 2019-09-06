import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book-component'
import popper from 'popper.js';
import bootstrap from 'bootstrap'
import jquery from 'jquery'

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    jquery,
    popper,
    bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
