import { HttpClient } from '@angular/common/http'
import { Conference } from '../models/conference.model'
import { map, Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ConferenceService {
  constructor(public http: HttpClient) { }

  findAll(): Observable<Conference[]> {
    return this.http.get<Conference[]>(`http://localhost:8080/conferences`);
  }

  create(conference: Conference): Observable<Conference> {
    return this.http.post(`http://localhost:8080/conferences`, conference);
  }

  update(conference: Conference): Observable<Conference> {
    return this.http.put(`http://localhost:8080/conferences/${conference.id}`, conference);
  }

  delete(conference: Conference): Observable<void> {
    return this.http.delete(`http://localhost:8080/conferences/${conference.id}`).pipe(map(() => {}));
  }
}
