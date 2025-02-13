import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Message{
    message: string
}

@Injectable({providedIn: 'root'})
export class ScraperApiService {
  constructor(private http: HttpClient) {}

  getScraper(): Observable<Message> {
    return this.http.get<Message>(`/api/scraper/`);
  }
}