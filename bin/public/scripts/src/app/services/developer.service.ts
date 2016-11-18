import {Injectable, Component} from '@angular/core'
import {HttpService} from './http.service'
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class DeveloperService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';

    constructor(
        private http: HttpService
    ) {
        
    }

    public getTopDevelopers(): Observable<any> {


        let url: string = `${this.BASE_URL}/topDevelopers`;
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