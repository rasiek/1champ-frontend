import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/interfaces/user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly APIUrl = `${environment.APIUrl}/users`;


  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }


  add(user: User): Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/ld+json',
        'accept': 'application/ld+json'
      })
    }

    return this.http.post(this.APIUrl, user, httpOptions);
  }
}
