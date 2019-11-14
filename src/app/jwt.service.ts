import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {User} from './user.interface';
import {Observable} from 'rxjs';
import {Information} from './information';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) {
  }

  login(user: User) {
    const body = new FormData();
    body.append('email', user.email);
    body.append('password', user.password);
    return this.httpClient.post<{ token: string }>('http://localhost:8080/login', body).pipe(tap(res => {
      localStorage.setItem('access_token', res.token);
    }));
  }


  register(post: Partial<User>): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:8080/register`, post);

  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getMembers(): Observable<Information[]> {
    return this.httpClient.get<Information[]>(`http://localhost:8080/api`);
  }

}
