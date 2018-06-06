import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SchemaParserService {
  data: any = {};
  constructor(
    private http: HttpClient
  ) { }

  use(): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const filePath = `assets/schema.json`;
      this.http.get<{}>(filePath).subscribe(
        schema => {
          this.data = schema;
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
