import { TestBed } from '@angular/core/testing';

import { OrderPersonService } from './order-person.service';

describe('OrderPersonService', () => {
  let service: OrderPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
