import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaystationService {
  private apiUrl = 'https://api.sampleapis.com/playstation/games';

  constructor(private http: HttpClient) { }

  getPlaystationData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
