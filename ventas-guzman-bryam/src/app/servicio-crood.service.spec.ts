import { TestBed } from '@angular/core/testing';

import { ServicioCroodService } from './servicio-crood.service';

describe('ServicioCroodService', () => {
  let service: ServicioCroodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCroodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
