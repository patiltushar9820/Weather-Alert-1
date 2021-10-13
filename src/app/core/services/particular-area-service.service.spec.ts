import { TestBed } from '@angular/core/testing';

import { ParticularAreaServiceService } from './particular-area-service.service';

describe('ParticularAreaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticularAreaServiceService = TestBed.get(ParticularAreaServiceService);
    expect(service).toBeTruthy();
  });
});
