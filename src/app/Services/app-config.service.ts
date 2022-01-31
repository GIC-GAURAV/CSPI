import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = '';

  ensureInit(): Promise<any> {
    return new Promise((r, e) => {
      this.httpClient.get('assets/json/config.json').subscribe(
        (content) => {
          console.log('URL--->', content);
          Object.assign(this, content);
          console.log(this);
          r(this);
        },
        (reason) => e(reason)
      );
    });
  }
}
