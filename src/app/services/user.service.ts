import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.url + '/users?per_page=6&delay=2').pipe(map(response => response['data']));
  }

  geUserById(id: string): Observable<User> {
    return this.http.get(`${this.url}/users/${id}`).pipe(map(response => response['data']));
  }
}
