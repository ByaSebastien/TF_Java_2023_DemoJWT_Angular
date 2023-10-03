import { Component, OnInit } from '@angular/core';
import { BookSimpleDTO } from 'src/app/models/bookSimpleDTO';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.scss']
})
export class BookIndexComponent implements OnInit {

  books!: BookSimpleDTO[];

  constructor(
    private readonly _bookService: BookService
  ) { }

  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (data) => {
        this.books = data;
      }
    })
  }

}
