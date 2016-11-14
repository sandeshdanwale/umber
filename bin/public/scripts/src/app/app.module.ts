import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './components/navbar/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { PropertyCardCarouselComponent } from './components/bottomSection/property/propertyCardCarousel/propertyCardCarousel.component';
import { PropertyCardComponent } from './components/bottomSection/property/propertyCard/propertyCard.component';


import { HttpService } from './services/http.service'
import { UserPreferenceService } from './services/userPreference.service'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    PropertyCardCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [HttpService, UserPreferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
