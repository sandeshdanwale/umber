import {Component} from '@angular/core';
import {UserPreferenceService} from './services/userPreference.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [UserPreferenceService]
})
export class AppComponent {
}