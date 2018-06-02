import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SchemaParserService {
  xml: any;
  constructor(
    private http: HttpClient
  ) {
    this.http
      .get('../assets/xml/schema.xml', { responseType: 'text' })
      .toPromise().then( data => {
      const parser = new DOMParser();
      this.xml = parser.parseFromString( data, 'text/xml' );
    });
  }

}
