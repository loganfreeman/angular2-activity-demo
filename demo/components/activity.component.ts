import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TAB_DIRECTIVES, BUTTON_DIRECTIVES} from 'ng2-bootstrap';

import { Activity }           from '../activity';

@Component({
  selector: 'activity-item',
  template: `
  <div class="card">
    <h4 class="card-title">{{activity.actor_name}}</h4>
  </div>
  `,
  directives: []
})
export class ActivityComponent {
  @Input() activity:Activity;
}
