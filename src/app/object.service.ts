import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ObjectService<T> {

  private readonly APIUrl = `${environment.APIUrl}/${this.getObjectUrl()}`;

  constructor(
    protected messageService: MessageService,
    protected http: HttpClient
  ) { }

  abstract getObjectUrl(): string;

  getList(): Observable<T[]> {


    const res: Observable<T[]> = this.http.get<T[]>(`${this.APIUrl}.json`);

    return res
      .pipe(
        tap(_ => this.log(`fetched tournaments`)),
        catchError(this.handleError<T[]>(`getList`, []))
      );

  }

  get(id: string | number): Observable<T> {


    const res: Observable<T> = this.http.get<T>(`${this.APIUrl}/${id}.json`);

    return res
      .pipe(
        tap(_ => this.log(`fetched tournaments`)),
        catchError(this.handleError<T>(`getList`, {} as T))
      );

  }

  add(obj: T): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/ld+json',
        'accept': 'application/ld+json'
      })
    };

    return this.http.post(this.APIUrl, obj, httpOptions);
  }

  private log(message: string) {
    this.messageService.add(`ObjectService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   * 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);

    }
  }


}
