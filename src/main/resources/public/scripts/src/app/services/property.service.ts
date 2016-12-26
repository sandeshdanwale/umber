import { Injectable, Component } from '@angular/core'
import { Store } from '@ngrx/store';
import { HttpService } from './http.service'
import { Http, URLSearchParams } from '@angular/http';
import * as fromRoot from '../reducers';
import { Property } from '../models/aggregate/property.model';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class PropertyService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';
    property: Observable<Property[]>;
    defaultProperty: Observable<Property[]>;
    constructor(
        private http: HttpService,
        private store: Store<fromRoot.State>
    ) {
        this.property = store.let(fromRoot.getPropertyEntities);
        this.defaultProperty = store.let(fromRoot.getDefaultPropertyEntities);
    }

    public getProperties(cityId: string, searchString: string): Observable<Property[]> {
        if (!searchString) {
            return this.getFeaturedProperties(cityId);
        }
        let url: string = `${this.BASE_URL}/property/search/${cityId}/${searchString}`; 
        return this.http.get(url)
                .map(this.extractData)
    }

    public getPropertyDetails(id: string): Observable<Property> {
        let url: string = `${this.BASE_URL}/property/details/${id}`; 
        return this.http.get(url)
                .map(this.extractData)
    }

    public getFeaturedProperties(cityId: string): Observable<Property[]> {


        let url: string = `${this.BASE_URL}/property/featuredPropertiesByCity?cityId=${cityId}`; 
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
            return [{
                    propertyName: "shiv",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }, {
                    propertyName: "mahindra",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }, {
                    propertyName: "sobha",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
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
	    //console.log(errMsg);
	    //return Observable.throw(errMsg);
	    let res = [{
                    propertyName: "shiv",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }, {
                    propertyName: "mahindra",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }, {
                    propertyName: "sobha",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry ..."
                }]
    	return res;//Observable.throw(res);
  	}
}