import { Http } from '@angular/http';
import { Activity } from './activity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
export declare class ActivityService {
    private http;
    constructor(http: Http);
    private activitiesUrl;
    getActivities(): Observable<Activity[]>;
    private extractData(res);
    private handleError(error);
}
