import { TestBed } from '@angular/core/testing';

import { UsariosApiService } from './usarios-api.service';

describe('UsariosApiService', () => {
  let service: UsariosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsariosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
