import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookFormModel } from '../models/bookForm.model';
import { Observable } from 'rxjs';
import { BookDetailsDTO } from '../models/BookDetailsDTO';
import { environment } from 'src/environments/environment.development';
import { BookSimpleDTO } from '../models/bookSimpleDTO';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  create(book: BookFormModel): Observable<BookDetailsDTO> {
    return this._http.post<BookDetailsDTO>(environment.apiBaseUrl + "/book", book);
  }

  getAll(): Observable<BookSimpleDTO[]> {
    return this._http.get<BookSimpleDTO[]>(environment.apiBaseUrl + "/book");
  }

  getOne(id: number): Observable<BookDetailsDTO> {
    return this._http.get<BookDetailsDTO>(environment.apiBaseUrl + `/book/${id}`);
  }

  update(id: number, book: BookFormModel): Observable<BookDetailsDTO> {
    return this._http.put<BookDetailsDTO>(environment.apiBaseUrl + `/book/${id}`, book);
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(environment.apiBaseUrl + `/book/${id}`);
  }

  addFavorite(id: number): Observable<any> {
    return this._http.patch<any>(environment.apiBaseUrl + `/book/${id}`, null);
  }
}
