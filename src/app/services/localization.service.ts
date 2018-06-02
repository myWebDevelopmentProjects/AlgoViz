import { Injectable } from '@angular/core';
import { SchemaParserService } from './schema-parser.service';

@Injectable()
export class LocalizationService {

  constructor(
    private schemaParserService: SchemaParserService
  ) {

  }

}
