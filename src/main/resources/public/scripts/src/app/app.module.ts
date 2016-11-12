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
import { MenuComponent } from './components/middleSection/menu/menu.component';
import { SearchPlaceHolderComponent } from './components/middleSection/searchPlaceHolder/searchPlaceHolder.component';

import { HttpService } from './services/http.service';
import { UserPreferenceService } from './services/userPreference.service';
import { DeveloperService } from './services/developer.service';
import { CacheService } from './services/cache.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    OverlappingSectionComponent,
    DeveloperCardCarouselComponent,
    DeveloperCardComponent,
    MenuComponent,
    SearchPlaceHolderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [HttpService, UserPreferenceService, DeveloperService, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
