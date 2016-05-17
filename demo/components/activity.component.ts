import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TAB_DIRECTIVES, BUTTON_DIRECTIVES} from 'ng2-bootstrap';

import { Activity }           from '../activity';

@Component({
  selector: 'activity-item',
  template: `
  <div class="card">
    <h4 class="card-title">{{activity.actor_description}}</h4>
    <h5>
      <img src="{{activity.actor_avator}}">
      <a href="{{activity.actor_url}}">
        <em>{{activity.actor_username}}</em> @ {{activity.provider}}
      </a>
    </h5>

    <br>
    <a href="{{activity.activity_attachment}}">Attachment</a>
  </div>
  `,
  directives: []
})
export class ActivityComponent {
  @Input() activity:Activity;

  jsonStringify(activity:any){
    return JSON.stringify(activity, null, 2);
  }
}
