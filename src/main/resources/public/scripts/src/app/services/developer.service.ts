import {Injectable, Component} from '@angular/core'
import {HttpService} from './http.service'
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import {Developer} from '../models/aggregate/developer.model';
import {Response} from '@angular/http';

@Injectable()
export class DeveloperService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';
    developer: Observable<Developer[]>;
    constructor(
        private http: HttpService,
        private store: Store<fromRoot.State>
    ) {
        this.developer = store.let(fromRoot.getDeveloperEntities);
    }

    public getDeveloperDetails(id: string): Observable<any> {
        let url: string = `${this.BASE_URL}/developer/details/${id}`; 
        return this.http.get(url)
                .map(this.extractData)
    }

    public getTopDevelopers(): Observable<any> {


        let url: string = `${this.BASE_URL}/developer/topDevelopers`;
        return this.http.get(url)
        		.map(this.extractData)
                .catch(this.handleError);
    }

    public getFeaturedDevelopers(): Observable<any> {


        let url: string = `${this.BASE_URL}/developer/featuredDevelopers`;
        return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data;
        try {
    	    data = res.json();
            return data;
        } catch (e) {
            return [{
                    developerName: "shiv"
                }, {
                    developerName: "mahindra"
                }, {
                    developerName: "sobha"
                }, {
                    developerName: "shubh-laxmi"
                }, {
                    developerName: "radius"
                }]
        }
    	
  	}

  	private handleError (error: Response | any) {
	    let errMsg: string;
	    if (error instanceof Response) {
	      const body = error.json() || '';
	      const err = body.error || JSON.stringify(body);
	      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    //return Observable.throw(errMsg);
	    let res = [{
                    developerName: "shiv"
                }, {
                    developerName: "mahindra"
                }, {
                    developerName: "sobha"
                }, {
                    developerName: "shubh-laxmi"
                }, {
                    developerName: "radius"
                }]
    	Observable.throw(res);
  	}
}