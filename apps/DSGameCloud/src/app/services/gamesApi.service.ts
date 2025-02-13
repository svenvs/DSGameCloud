import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameAPIModel } from '@dsgame-cloud/shared'

@Injectable({providedIn: 'root'})
export class GamesApiService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<GameAPIModel[]> {
    return this.http.get<GameAPIModel[]>(`/api/games/`);
  }
}