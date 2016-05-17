import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TAB_DIRECTIVES, BUTTON_DIRECTIVES, ACCORDION_DIRECTIVES} from 'ng2-bootstrap';

import {ActivityService} from '../activity.service';

import { Activity }           from '../activity';

import {ActivityComponent} from './activity.component';


let name = 'activities';

let description = '';

@Component({
  selector: 'activity-section',
  template: `
  <section id="${name}">
    <h1>${name} section</h1>

    <hr>

    <br/>

    <div class="btn-group">
      <button type="button" class="btn btn-primary" (click)="loadActivities()">
        Loading activities
      </button>
    </div>

    <accordion [closeOthers]="oneAtATime">
      <accordion-group *ngFor="let activity of activities" heading="{{activity.actor_description}}">
        <activity-item  [activity]="activity"></activity-item>
      </accordion-group>
    </accordion>


  </section>
  `,
  directives: [TAB_DIRECTIVES, ACCORDION_DIRECTIVES, CORE_DIRECTIVES, ActivityComponent],
  providers: [ActivityService]
})
export class ActivitySectionComponent {

  constructor(private activityService: ActivityService) { }

  activities: Activity[];

  errorMessage: any;

  loadActivities() {
    this.activityService.getActivities()
      .subscribe(
      activities => {
        this.activities = activities;
      },
      error => this.errorMessage = <any>error);
  }
}
