import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { BookService } from './book.service';
import { BookDetailsDTO } from '../models/BookDetailsDTO';

describe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });

    service = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch data from the API', () => {
    const mockData: BookDetailsDTO = { id: 1, title: 'Test Data', description: 'coucou' };

    service.getOne(1).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/book/1');

    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });


});
