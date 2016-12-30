import {Component, Input, ChangeDetectionStrategy, HostListener } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UiService } from '../../../services/ui.service';
import { TagService } from '../../../services/tag.service';
import { Panel } from '../../../models/aggregate/ui.model';
import { User } from '../../../models/aggregate/user.model';
import { Tag } from '../../../models/aggregate/tag.model';
import { City } from '../../../models/aggregate/city.model';
import * as _ from 'lodash';

@Component({
	selector: 'search-overlay',
	templateUrl: 'searchOverlay.component.html',
	styleUrls: ['searchOverlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOverlayComponent {

  @Input() activePanels: Panel[];
  @Input() user: User;

  tags: Observable<Tag[]>;
  searchStr: string;
  
	constructor(
    private uiService: UiService,
    private tagService: TagService
    ) {
      this.tags = this.tagService.tag;
    }

    ngOnInit() {
      console.log(this.activePanels)
    }

  	public closeSearchOverlay() {
  		this.uiService.closeSearchOverlay();
  	}

    public searchString(str: string) {
      this.searchStr = str;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(kbdEvent: KeyboardEvent) { 
      if (kbdEvent.key === 'Escape') {
        this.closeSearchOverlay();
      }
    }

    public isSearchOverlayOpen(): any {
      let overlay = _.head(_.filter(this.activePanels, (p) => p.name === 'searchOverlay'));
      return overlay && overlay.name;
    }
}