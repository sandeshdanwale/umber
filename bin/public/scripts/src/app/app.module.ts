import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { DBModule, Database } from '@ngrx/db';

import { AppComponent } from './app.component';
import { NavComponent } from './components/navbar/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { OverlappingSectionComponent } from './components/bottomSection/overlappingSection/overlappingSection.component';
import { DeveloperCardCarouselComponent } from './components/bottomSection/developer/developerCardCarousel/developerCardCarousel.component';
import { DeveloperCardComponent } from './components/bottomSection/developer/developerCard/developerCard.component';
import { PropertyCardCarouselComponent } from './components/bottomSection/property/propertyCardCarousel/propertyCardCarousel.component';
import { PropertyCardComponent } from './components/bottomSection/property/propertyCard/propertyCard.component';
import { MenuComponent } from './components/middleSection/menu/menu.component';
import { SearchPlaceHolderComponent } from './components/middleSection/searchPlaceHolder/searchPlaceHolder.component';
import { FeaturedHeadingComponent } from './components/middleSection/featuredHeading/featuredHeading.component'
import { SearchOverlayComponent } from './components/search/searchOverlay/searchOverlay.component'
import { SearchBoxComponent } from './components/search/searchBox/searchBox.component'
import { ModalsComponent } from './modals/modals.component';
import { ResultContainerComponent } from './components/search/result/resultContainer/resultContainer.component';
import { ResultDetailsComponent } from './components/search/result/details/resultDetails/resultDetails.component';
import { ResultListComponent } from './components/search/result/list/resultList/resultList.component';
import { LocationListComponent } from './components/search/result/list/locationList/locationList.component';
import { DeveloperListComponent } from './components/search/result/list/developerList/developerList.component';
import { PropertyListComponent } from './components/search/result/list/propertyList/propertyList.component';
import { PropertyDetailsComponent } from './components/search/result/details/propertyDetails/propertyDetails.component';
import { LocationDetailsComponent } from './components/search/result/details/locationDetails/locationDetails.component';
import { DeveloperDetailsComponent } from './components/search/result/details/developerDetails/developerDetails.component';

import { reducer } from './reducers';
import { HttpService } from './services/http.service';
import { UserPreferenceService } from './services/userPreference.service';
import { DeveloperService } from './services/developer.service';
import { PropertyService } from './services/property.service';
import { LocationService } from './services/location.service';
import { UiService } from './services/ui.service';
import { AggregationService } from './services/aggregation.service';
import { CacheService } from './services/cache.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    OverlappingSectionComponent,
    DeveloperCardCarouselComponent,
    DeveloperCardComponent,
    PropertyCardCarouselComponent,
    PropertyCardComponent,
    MenuComponent,
    SearchPlaceHolderComponent,
    FeaturedHeadingComponent,
    SearchOverlayComponent,
    SearchBoxComponent,
    ModalsComponent,
    ResultContainerComponent,
    ResultDetailsComponent,
    ResultListComponent,
    DeveloperListComponent,
    PropertyListComponent,
    LocationListComponent,
    PropertyDetailsComponent,
    LocationDetailsComponent,
    DeveloperDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer)
  ],
  providers: [HttpService, UserPreferenceService, DeveloperService, LocationService,
  AggregationService, CacheService, PropertyService, UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
