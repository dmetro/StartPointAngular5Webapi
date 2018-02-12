import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { User } from '../user/user'



@Injectable()
export class UserService {

  private _url: string = "api/user/1";
  constructor(private _http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._url)
      .catch(this.handleError);

  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message)
    return Observable.throw(err.message);
  }


}

