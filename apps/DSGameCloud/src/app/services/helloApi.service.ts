import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Hello {
  message: string;
}

@Injectable({providedIn: 'root'})
export class HelloApiService {
  constructor(private http: HttpClient) {}

  getHelloApi(): Observable<Hello> {
    return this.http.get<Hello>(`/api/hello/`);
  }

}