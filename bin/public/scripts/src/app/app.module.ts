import { BrowserModule } from '@angular/platform-browser';
//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { DBModule, Database } from '@ngrx/db';
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { NavComponent } from './components/navbar/nav.component';
import { NavSmallComponent } from './components/navbarSmall/navSmall.component';
import { BannerComponent } from './components/banner/banner.component';
import { OverlappingSectionComponent } from './components/bottomSection/overlappingSection/overlappingSection.component';
import { DeveloperCardCarouselComponent } from './components/bottomSection/developer/developerCardCarousel/developerCardCarousel.component';
import { DeveloperCardComponent } from './components/shared/developerCard/developerCard.component';
import { InfiniteScroll } from './components/shared/infinite-scroll/infinite-scroll';
import { PositionResolverFactory } from './components/shared/infinite-scroll/position-resolver';
import { AxisResolverFactory } from './components/shared/infinite-scroll/axis-resolver';
import { PropertyCardCarouselComponent } from './components/bottomSection/property/propertyCardCarousel/propertyCardCarousel.component';
import { PropertyCardComponent } from './components/shared/propertyCard/propertyCard.component';
import { PropertyCardSmallComponent } from './components/shared/propertyCardSmall/propertyCardSmall.component';
import { PropertyCardMediumComponent } from './components/shared/propertyCardMedium/propertyCardMedium.component';
import { DeveloperCardSmallComponent } from './components/shared/developerCardSmall/developerCardSmall.component';
import { PropertyCardVsmallComponent } from './components/shared/propertyCardVsmall/propertyCardVsmall.component';
import { PropertyCardHorizontalComponent } from './components/shared/propertyCardHorizontal/propertyCardHorizontal.component';
import { SelectedTagComponent } from './components/search/selectedTag/selectedTag.component'
import { MenuComponent } from './components/middleSection/menu/menu.component';
import { SearchPlaceHolderComponent } from './components/middleSection/searchPlaceHolder/searchPlaceHolder.component';
import { FeaturedHeadingComponent } from './components/middleSection/featuredHeading/featuredHeading.component';
import { SearchOverlayComponent } from './components/search/searchOverlay/searchOverlay.component';
import { PropertyDetailOverlayComponent } from './components/search/propertyDetailOverlay/propertyDetailOverlay.component'
import { SearchBoxComponent } from './components/search/searchBox/searchBox.component';
import { ModalsComponent } from './modals/modals.component';
import { ResultContainerComponent } from './components/search/result/resultContainer/resultContainer.component';
import { ResultDetailsComponent } from './components/search/result/details/resultDetails/resultDetails.component';
import { ResultListComponent } from './components/search/result/list/resultList/resultList.component';
import { CityListComponent } from './components/search/result/list/cityList/cityList.component';
import { LandmarkListComponent } from './components/search/result/list/landmarkList/landmarkList.component';
import { DeveloperListComponent } from './components/search/result/list/developerList/developerList.component';
import { PropertyListComponent } from './components/search/result/list/propertyList/propertyList.component';
import { PropertyDetailsComponent } from './components/search/result/details/propertyDetails/propertyDetails.component';
import { CityDetailsComponent } from './components/search/result/details/cityDetails/cityDetails.component';
import { DeveloperDetailsComponent } from './components/search/result/details/developerDetails/developerDetails.component';
import { ResultDetailListComponent } from './components/search/result/detailList/resultDetailList/resultDetailList.component';
import { PropertyDetailListComponent } from './components/search/result/detailList/propertyDetailList/propertyDetailList.component';
import { LandmarkDetailsComponent } from './components/search/result/details/landmarkDetails/landmarkDetails.component';

import { OrderByPipe, ActiveLandmarkPipe, ActiveDeveloperPipe, ActivePropertyPipe, 
    DisplayViewport, DisplayConfig } from './pipes/generic.pipe';

import { reducer } from './reducers';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { DeveloperService } from './services/developer.service';
import { PropertyService } from './services/property.service';
import { CityService } from './services/city.service';
import { UiService } from './services/ui.service';
import { LandmarkService } from './services/landmark.service';
import { AggregationService } from './services/aggregation.service';
import { TagService } from './services/tag.service';
import { CacheService } from './services/cache.service';
import { UtilService } from './services/util.service';
import { PropertyCardDetailsComponent } from './components/shared/property-card-details/property-card-details.component';
import { MapComponent } from './components/shared/map/map.component';
import { ImageOverlayComponent } from './components/search/image-overlay/image-overlay.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PropertyGalleryComponent } from './components/bottomSection/property/property-gallery/property-gallery.component';
import { PropertyCarouselComponent } from './components/bottomSection/property/property-gallery/property-carousel/property-carousel.component';
import { FeaturedSectionComponent } from './components/bottomSection/featured-section/featured-section.component';
import { DeveloperGalleryComponent } from './components/bottomSection/developer/developer-gallery/developer-gallery.component';
import { PropertyCarouselHorizontalComponent } from './components/bottomSection/property/property-gallery/property-carousel-horizontal/property-carousel-horizontal.component';
import { PropertyCardGiantComponent } from './components/shared/property-card-giant/property-card-giant.component';
import { PropertyCarouselGiantHorizontalComponent } from './components/bottomSection/property/property-gallery/property-carousel-giant-horizontal/property-carousel-giant-horizontal.component';
import { DeveloperCarouselHorizontalComponent } from './components/bottomSection/developer/developer-gallery/developer-carousel-horizontal/developer-carousel-horizontal.component';
import { DeveloperCarouselGiantHorizontalComponent } from './components/bottomSection/developer/developer-gallery/developer-carousel-giant-horizontal/developer-carousel-giant-horizontal.component';
import { DeveloperCardVerySmallComponent } from './components/shared/developer-card-very-small/developer-card-very-small.component';
import { DeveloperCardGiantComponent } from './components/shared/developer-card-giant/developer-card-giant.component';
import { PropertyCardExtraSmallComponent } from './components/shared/property-card-extra-small/property-card-extra-small.component';
import { SmallImageOverlayComponent } from './components/search/small-image-overlay/small-image-overlay.component';
import { PropertyCarouselGiantMobileHorizontalComponent } from './components/bottomSection/property/property-gallery/property-carousel-giant-mobile-horizontal/property-carousel-giant-mobile-horizontal.component';
import { DeveloperCarouselGiantMobileHorizontalComponent } from './components/bottomSection/developer/developer-gallery/developer-carousel-giant-mobile-horizontal/developer-carousel-giant-mobile-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavSmallComponent,
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
    PropertyDetailOverlayComponent,
    SearchBoxComponent,
    ModalsComponent,
    ResultContainerComponent,
    ResultDetailsComponent,
    ResultListComponent,
    DeveloperListComponent,
    PropertyListComponent,
    LandmarkListComponent,
    CityListComponent,
    PropertyDetailsComponent,
    CityDetailsComponent,
    DeveloperDetailsComponent,
    LandmarkDetailsComponent,
    ResultDetailListComponent,
    PropertyDetailListComponent,
    DeveloperCardSmallComponent,
    PropertyCardSmallComponent,
    PropertyCardMediumComponent,
    PropertyCardVsmallComponent,
    PropertyCardHorizontalComponent,
    SelectedTagComponent, 
    OrderByPipe, ActiveLandmarkPipe, ActiveDeveloperPipe, ActivePropertyPipe, 
    DisplayViewport, DisplayConfig,
    InfiniteScroll,
    PropertyCardDetailsComponent,
    MapComponent,
    ImageOverlayComponent,
    FooterComponent,
    PropertyGalleryComponent,
    PropertyCarouselComponent,
    FeaturedSectionComponent,
    DeveloperGalleryComponent,
    PropertyCarouselHorizontalComponent,
    PropertyCardGiantComponent,
    PropertyCarouselGiantHorizontalComponent,
    DeveloperCarouselHorizontalComponent,
    DeveloperCarouselGiantHorizontalComponent,
    DeveloperCardVerySmallComponent,
    DeveloperCardGiantComponent,
    PropertyCardExtraSmallComponent,
    SmallImageOverlayComponent,
    PropertyCarouselGiantMobileHorizontalComponent,
    DeveloperCarouselGiantMobileHorizontalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
        'apiKey': 'AIzaSyA3HtauA1ix8F9UxgtpB-zteJxkZ9Ihs4I'
    }),
    StoreModule.provideStore(reducer)/*,
    InfiniteScrollModule*/
  ],
  providers: [HttpService, UserService, DeveloperService, CityService, LandmarkService, 
  AggregationService, CacheService, PropertyService, UiService, TagService, UtilService, 
  PositionResolverFactory, AxisResolverFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
