import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TAB_DIRECTIVES, BUTTON_DIRECTIVES, ACCORDION_DIRECTIVES} from 'ng2-bootstrap';

import {ActivityService} from '../activity.service';

import { Activity }           from '../activity';

import {ActivityComponent} from './activity.component';

import * as Collections from 'typescript-collections';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

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
      <button type="button" class="btn btn-primary" (click)="toggleGraph()" *ngIf="hasActivities()">
        Show analytical graph
      </button>
    </div>

    <hr>

    <base-chart class="chart" *ngIf="graphVisible"
               [data]="chartData"
               [labels]="chartLabels"
               [chartType]="chartType">
    </base-chart>

    <hr>

    <accordion [closeOthers]="oneAtATime">
      <accordion-group *ngFor="let activity of activities" heading="{{activity.actor_name}}">
        <activity-item  [activity]="activity"></activity-item>
      </accordion-group>
    </accordion>


  </section>
  `,
  directives: [TAB_DIRECTIVES, ACCORDION_DIRECTIVES, CORE_DIRECTIVES, ActivityComponent, CHART_DIRECTIVES],
  providers: [ActivityService]
})
export class ActivitySectionComponent {

  constructor(private activityService: ActivityService) { }

  activities: Activity[];

  errorMessage: any;

  chartData: number[];

  chartLabels: string[];

  graphVisible: boolean = false;

  chartType:string = 'doughnut';


  toggleGraph(){
    this.graphVisible = !this.graphVisible;
  }

  hasActivities(){
    return this.chartData && this.chartLabels;
  }

  generateChart(){
    var dict = new Collections.Dictionary<string, number>();
    for(var i =0; i < this.activities.length; i++){
      var provider = this.activities[i].provider;
      var count = dict.getValue(provider);
      if(count){
        dict.setValue(provider, count +1)
      }else{
        dict.setValue(provider, 1);
      }
    }
    this.chartData = dict.values();
    this.chartLabels = dict.keys();
  }



  loadActivities() {
    this.activityService.getActivities()
      .subscribe(
      activities => {
        this.activities = activities;
        this.generateChart();
      },
      error => this.errorMessage = <any>error);
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
