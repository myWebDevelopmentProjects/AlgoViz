import { TestBed, inject } from '@angular/core/testing';

import { AlgovizEngineService } from './algoviz-engine.service';

describe('AlgovizEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlgovizEngineService]
    });
  });

  it('should be created', inject([AlgovizEngineService], (service: AlgovizEngineService) => {
    expect(service).toBeTruthy();
  }));
});
