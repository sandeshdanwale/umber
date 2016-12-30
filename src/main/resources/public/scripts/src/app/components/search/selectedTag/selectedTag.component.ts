import {Component, Input, ChangeDetectionStrategy, HostListener } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { UiService } from '../../../services/ui.service';
import { TagService } from '../../../services/tag.service';
import { Panel } from '../../../models/aggregate/ui.model';
import { User } from '../../../models/aggregate/user.model';
import { City } from '../../../models/aggregate/city.model';
import { Tag } from '../../../models/aggregate/tag.model';
import * as _ from 'lodash';

@Component({
	selector: 'selected-tag',
	templateUrl: 'selectedTag.component.html',
	styleUrls: ['selectedTag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedTagComponent {

  @Input() tag: Tag;
  @Input() len: number;

	constructor(
      private tagService: TagService,
      private uiService: UiService
    ) {
    }

    ngOnInit() {
    }

  	public removeTag() {
      this.tagService.removeTag(this.tag);
      if (this.len <= 1) {
        this.uiService.closeSearchDetailList();
      }
  	}

}