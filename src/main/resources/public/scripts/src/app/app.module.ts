import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

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

import { HttpService } from './services/http.service';
import { UserPreferenceService } from './services/userPreference.service';
import { DeveloperService } from './services/developer.service';
import { PropertyService } from './services/property.service';
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
    FeaturedHeadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [HttpService, UserPreferenceService, DeveloperService, CacheService, PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
