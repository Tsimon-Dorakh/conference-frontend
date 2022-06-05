import { HttpClient } from '@angular/common/http'
import { Conference } from '../models/conference.model'
import { map, Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class ConferenceService {
  constructor(public http: HttpClient) { }

  findAll(): Observable<Conference[]> {
    return this.http.get<Conference[]>(`${environment.apiUrl}/conferences`);
  }

  create(conference: Conference): Observable<Conference> {
    return this.http.post(`${environment.apiUrl}/conferences`, conference);
  }

  update(conference: Conference): Observable<Conference> {
    return this.http.put(`${environment.apiUrl}/conferences/${conference.id}`, conference);
  }

  delete(conference: Conference): Observable<void> {
    return this.http.delete(`${environment.apiUrl}/conferences/${conference.id}`).pipe(map(() => {}));
  }
}
