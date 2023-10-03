import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { bookForm } from 'src/app/models/forms/bookForm';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  fg!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      ...bookForm
    })
  }

  onSubmit(): void {

    if (this.fg.invalid) {
      return;
    }

    this._bookService.create(this.fg.value).subscribe({
      next: (data) => {
        this._router.navigate(['book'])
      }
    })
  }


}
