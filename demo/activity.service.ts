import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Activity }           from './activity';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';
@Injectable()
export class ActivityService {
  constructor (private http: Http) {}
  private activitiesUrl = 'https://nuvi-challenge.herokuapp.com/activities';  // URL to web API
  public getActivities (): Observable<Activity[]> {
    return this.http.get(this.activitiesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    return res.json();
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
