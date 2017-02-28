import { Component, Input } from '@angular/core';
import { Panel } from '../../../models/aggregate/ui.model';

@Component({
  selector: 'umber-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  @Input() activePanels: Panel[];
  constructor() { 
  }

}
