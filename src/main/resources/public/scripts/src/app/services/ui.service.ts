import { Injectable, Component } from '@angular/core'
import { Store } from '@ngrx/store';
import { HttpService } from './http.service'
import { PropertyService } from './property.service';
import { DeveloperService } from './developer.service';
import { LandmarkService } from './landmark.service';
import { CityService } from './city.service';
import { Http, URLSearchParams } from '@angular/http';
import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import * as property from '../actions/property.action';
import * as developer from '../actions/developer.action';
import * as landmark from '../actions/landmark.action';
import { Panel,SearchDetailPanel } from '../models/aggregate/ui.model';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Developer } from '../models/aggregate/developer.model';
import { Property } from '../models/aggregate/property.model';
import { Landmark } from '../models/aggregate/landmark.model';
import * as _ from 'lodash';

@Injectable()
export class UiService {

	BASE_URL: string = location.hostname === 'localhost' ? '' : '';
    activePanels: Observable<Panel[]>;
    activeSearchDetailPanel: Observable<SearchDetailPanel>;
    searchDetailListLoader: Observable<boolean>;
    constructor(
        private http: HttpService,
        private propertyService: PropertyService,
        private developerService:DeveloperService,
        private landmarkService: LandmarkService,
        private cityService: CityService,
        private store: Store<fromRoot.State>
    ) {
        this.activePanels = store.let(fromRoot.getActivePanels);
        this.activeSearchDetailPanel = store.let(fromRoot.getActiveSearchDetailPanel);
        this.searchDetailListLoader = store.let(fromRoot.getSearchDetailListLoader);
    }

    public serachDetailObservable(id: string, context: string): any {
        if (context === 'property') {
            return this.propertyService.getPropertyDetails(id);
        }
        if (context === 'developer') {
            return this.developerService.getDeveloperDetails(id);
        }
        if (context === 'landmark') {
            return this.landmarkService.getLandmarkDetails(id);
        }
    }

    public updateEntityPanel(id: string, context: string, data: any) {
        if (data && data.id) {
            if (context === 'property') {
                let searchDetailPanel:SearchDetailPanel = new SearchDetailPanel('property', data.id.registrationId); 
                let updatedProperty = new Property(data);
                this.store.dispatch(new property.UpdatePropertyDetail(updatedProperty));
                this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
            }
            if (context === 'developer') {
                let searchDetailPanel:SearchDetailPanel = new SearchDetailPanel('developer', data.id.registrationId); 
                let updatedDeveloper = new Developer(data);
                this.store.dispatch(new developer.UpdateDeveloperDetail(updatedDeveloper));
                this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
            }
            if (context === 'landmark') {
                let searchDetailPanel:SearchDetailPanel = new SearchDetailPanel('landmark', data.id.registrationId); 
                let updatedLandmark = new Landmark(data);
                this.store.dispatch(new landmark.UpdateLandmarkDetail(updatedLandmark));
                this.store.dispatch(new ui.UpdateSearchDetail(searchDetailPanel));
            }
        }
    }

    public updateSearchDetailPanel(id: string, context: string) {
        this.serachDetailObservable(id, context)
        .catch(function (e) {
            console.log(e)
        })
        .subscribe(data => {
            this.updateEntityPanel(id, context, data);
        })
    }

    public updateProperties(ids: string[]) {
        this.showSearchDetailListLoader();
        let caller = [];
        _.forEach(ids, id => caller.push(this.propertyService.getPropertyDetails(id)));

        Observable.forkJoin(
            caller
        ).subscribe(data => {
            _.forEach(data, p => {
                let updatedProperty = new Property(p);
                this.store.dispatch(new property.UpdatePropertyDetail(updatedProperty));
            })
            this.hideSearchDetailListLoader();
        })
    }

    public loadSearchOverlay() {
        let activePanels: Array<Panel> = [];
        activePanels.push(new Panel('main'));
        activePanels.push(new Panel('searchOverlay'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    }

    public loadSearchDetailList() {
        let activePanels: Array<Panel> = [];
        activePanels.push(new Panel('main'));
        activePanels.push(new Panel('searchOverlay'));
        activePanels.push(new Panel('searchDetailList'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    }

    public closeSearchDetailList() {
        let activePanels: Array<Panel> = [];
        activePanels.push(new Panel('main'));
        activePanels.push(new Panel('searchOverlay'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    }

    public showSearchDetailListLoader() {
        this.store.dispatch(new ui.ShowSearchDetailListLoader(true));
    }

    public hideSearchDetailListLoader() {
        setTimeout(() => {
            this.store.dispatch(new ui.ShowSearchDetailListLoader(false));
        }, 5000);
    }

    public closeSearchOverlay() {
        let activePanels: Array<Panel> = [];
        activePanels.push(new Panel('main'));
        this.store.dispatch(new ui.LoadSuccessAction(activePanels));
    }

    public capitalize(str: string): string {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
    }

    public format(str: string): string {
        let formattedStr = this.capitalize(str);
        return formattedStr.charAt(0).toLowerCase() + formattedStr.slice(1);
    }
}