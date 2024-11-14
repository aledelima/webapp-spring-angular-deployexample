import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GreetService {
  private greetUrl = '/greet';

  constructor(private http: HttpClient) {}

  getGreeting(): Observable<string> {
    return this.http.get(this.greetUrl, { responseType: 'text' });
  }

}
