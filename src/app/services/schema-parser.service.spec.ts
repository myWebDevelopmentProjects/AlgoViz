import { TestBed, inject } from '@angular/core/testing';

import { SchemaParserService } from './schema-parser.service';

describe('SchemaParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemaParserService]
    });
  });

  it('should be created', inject([SchemaParserService], (service: SchemaParserService) => {
    expect(service).toBeTruthy();
  }));
});
