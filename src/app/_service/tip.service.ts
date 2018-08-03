import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Tip } from '../_model/tip';
import { AlertService } from '../_service/alert.service';
import 'rxjs/add/operator/map';

const tipUrl = environment.tipUrl;

@Injectable({
  providedIn: 'root'
})
export class TipService {
  public token: string;

  constructor(private http: Http, private alertService: AlertService) { }

  saveTip(tip: Tip): Observable<any> {
    return this.http.post(tipUrl + 'create', JSON.stringify(tip))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          return response.json();
        } else {
          // return false to indicate failed login
          this.alertService.error('Tip not submitted!! Try later');
          return false;
        }
      });
  }
}
