import { Injectable, Component } from '@angular/core'
import { Store } from '@ngrx/store';
import { HttpService } from './http.service'
import { PropertyService } from './property.service';
import { Http, URLSearchParams } from '@angular/http';
import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import * as property from '../actions/property.action';
import { Panel,SearchDetailPanel } from '../models/aggregate/ui.model';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class UiService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';
    activePanels: Observable<Panel[]>;
    activeSearchDetailPanel: Observable<SearchDetailPanel>
    constructor(
        private http: HttpService,
        private propertyService: PropertyService,
        private store: Store<fromRoot.State>
    ) {
        this.activePanels = store.let(fromRoot.getActivePanels);
        this.activeSearchDetailPanel = store.let(fromRoot.getActiveSearchDetailPanel);
    }

    public updateSearchDetailPanel(id: string, context: string) {
        if (context === 'property') {
            this.propertyService.getPropertyDetails(id)
            .subscribe(data => {
                let searchDetailPanel:SearchDetailPanel = new SearchDetailPanel('property', data.id.registrationId); 
                this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
                this.store.dispatch(new property.UpdatePropertyDetail(data));
            })
        }
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