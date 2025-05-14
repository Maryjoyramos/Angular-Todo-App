import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { config } from '../app.config';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch todos', () => {
    service.getTodos().subscribe(todos => {
      expect(todos.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne(`${config.apiUrl}/todos?_limit=5`);
    req.flush([]);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
