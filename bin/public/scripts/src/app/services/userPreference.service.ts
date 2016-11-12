import {Injectable, Component} from '@angular/core'
import {HttpService} from './http.service'
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class UserPreferenceService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';

    constructor(
        private http: HttpService
    ) {
        
    }

    public getUserPreferences(userId: string): Observable<any> {

        //return new Promise<void>((resolve, reject) => {

        let url: string = `${this.BASE_URL}/userPreference?userId=null`;
        return this.http.get(url)
        		.map(this.extractData)
                .catch(this.handleError);
            /*.subscribe(res => {
            	let preference;
            	try {
	            	preference = res
	            } catch (e) {
	            	preference = {
	            		mainCities: [
	            			"Mumbai",
	            			"Pune",
	            			"Bangalore",
	            			"Hyderabad"
	            		],
	            		additionalCities: [
	            			"Nashik",
	            			"Delhi"
	            		],
	            		selectedCity: "Pune"
	            	}
	            	console.log('User Preference not found')
	            }
            })*/
        //})
    }

    private extractData(res: Response) {
    	//let body = res.json();
    	//return body.data || { };
        return {
            mainCities: [
                "Mumbai",
                "Pune",
                "Bangalore",
                "Hyderabad"
            ],
            additionalCities: [
                "Nashik",
                "Delhi"
            ],
            selectedCity: "Pune"
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
	    let preference = {
    		mainCities: [
    			"Mumbai",
    			"Pune",
    			"Bangalore",
    			"Hyderabad"
    		],
    		additionalCities: [
    			"Nashik",
    			"Delhi"
    		],
    		selectedCity: "Pune"
    	}
    	Observable.throw(preference);
  	}
}