import {Component, Input} from '@angular/core';

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
  @Input() public activity:Activity;
}
