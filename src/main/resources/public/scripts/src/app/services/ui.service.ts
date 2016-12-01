import {Injectable, Component} from '@angular/core'
import { Store } from '@ngrx/store';
import {HttpService} from './http.service'
import { Http, URLSearchParams } from '@angular/http';
import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import {Panel} from '../models/aggregate/ui.model';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class UiService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';
    activePanels: Observable<Panel[]>;
    constructor(
        private http: HttpService,
        private store: Store<fromRoot.State>
    ) {
        this.activePanels = store.let(fromRoot.getActivePanels);
    }

    public loadSearchOverlay() {
        let activePanels: Array<Panel> = [];
        activePanels.push(new Panel('main'));
        activePanels.push(new Panel('searchOverlay'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    }

    public closeSearchOverlay() {
        let activePanels: Array<Panel> = [];
        activePanels.push(new Panel('main'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    }
}