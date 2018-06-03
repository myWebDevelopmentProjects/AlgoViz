import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SchemaParserService {
  schemaXML: any;
  constructor(
    private http: HttpClient
  ) {
    /*
    this.http
      .get('../assets/xml/schema.xml', { responseType: 'text' })
      .toPromise().then( data => {
        const parser = new DOMParser();
        this.schemaXML = parser.parseFromString( data, 'text/xml' );
    });
    */
  }
  use(): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = '../assets/xml/schema.xml';
      this.http.get<{}>(langPath).subscribe(
        schema => {
          // this.schemaXML = Object.assign({}, schema || {});
          this.schemaXML = schema;
          resolve(this.schemaXML);
        },
        error => {
          this.schemaXML = '';
          resolve(this.schemaXML);
        }
      );
    });
  }
}
