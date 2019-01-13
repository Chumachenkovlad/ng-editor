import { TestBed } from '@angular/core/testing';

import { SynonymousService } from './synonymous.service';

describe('SynonymousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynonymousService = TestBed.get(SynonymousService);
    expect(service).toBeTruthy();
  });
});
