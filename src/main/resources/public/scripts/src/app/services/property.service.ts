import {Injectable, Component} from '@angular/core'
import {HttpService} from './http.service'
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class PropertyService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';

    constructor(
        private http: HttpService
    ) {
        
    }

    public getFeaturedProperties(): Observable<any> {


        let url: string = `${this.BASE_URL}/featuredProperties`;
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
                    propertyName: "shiv",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry.The company has always striven for benchmark quality ..."
                }, {
                    propertyName: "mahindra",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry.The company has always striven for benchmark quality ..."
                }, {
                    propertyName: "sobha",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry.The company has always striven for benchmark quality ..."
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
                    propertyName: "shiv",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry.The company has always striven for benchmark quality ..."
                }, {
                    propertyName: "mahindra",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry.The company has always striven for benchmark quality ..."
                }, {
                    propertyName: "sobha",
                    desc: "Largest and only backward integrated real estate player in the country, Sobha Limited is a big name in the construction industry.The company has always striven for benchmark quality ..."
                }]
    	Observable.throw(res);
  	}
}