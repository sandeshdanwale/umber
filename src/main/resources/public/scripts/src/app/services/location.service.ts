import {Injectable, Component} from '@angular/core'
import { Store } from '@ngrx/store';
import {HttpService} from './http.service'
import { Http, URLSearchParams } from '@angular/http';
import * as fromRoot from '../reducers';
import {Location} from '../models/aggregate/location.model';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class LocationService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';
    location: Observable<Location[]>;
    constructor(
        private http: HttpService,
        private store: Store<fromRoot.State>
    ) {
        this.location = store.let(fromRoot.getLocationEntities);
    }

    public getLocations(searchString: string): Observable<any> {
        let url: string = `${this.BASE_URL}/location/search/${searchString}`; 
        return this.http.get(url)
                .map(this.extractData)
    }

    public getLocationDetails(id: string): Observable<any> {
        let url: string = `${this.BASE_URL}/location/details/${id}`; 
        return this.http.get(url)
                .map(this.extractData)
    }

    public getFeaturedLocations(): Observable<any> {


        let url: string = `${this.BASE_URL}/location/featuredLocations`; 
        return this.http.get(url)
        		.map(this.extractData)
                //.catch(this.handleError);
    }

    private extractData(res: Response) {
        let data;
        try {
    	    data = res.json();
            return data;
        } catch (e) {
            return [{"locationId":{"registrationId":"1"},"rank":1,"name":"mumbai","primary":true,"featured":true},{"locationId":{"registrationId":"9"},"rank":9,"name":"pune","primary":true,"featured":true},{"locationId":{"registrationId":"3"},"rank":3,"name":"bangalore","primary":true,"featured":true},{"locationId":{"registrationId":"5"},"rank":5,"name":"hyderabad","primary":true,"featured":true}]
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
	    //console.log(errMsg);
	    //return Observable.throw(errMsg);
	    let res = [{"locationId":{"registrationId":"1"},"rank":1,"name":"mumbai","primary":true,"featured":true},{"locationId":{"registrationId":"9"},"rank":9,"name":"pune","primary":true,"featured":true},{"locationId":{"registrationId":"3"},"rank":3,"name":"bangalore","primary":true,"featured":true},{"locationId":{"registrationId":"5"},"rank":5,"name":"hyderabad","primary":true,"featured":true}]
    	return res;//Observable.throw(res);
  	}
}