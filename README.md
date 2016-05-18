Instructions
---
```shell
sudo npm install npm -g
sudo npm install -g typescript
npm install
PORT=9000 npm start
```


Steps
---
- `open localhost:9000` in browser
- click the button "load activities"


Note
---
implemented using: 
- [angular2](https://angular.io/)
- [ng2-bootstrap](http://valor-software.com/ng2-bootstrap/)
- [ng2-charts](http://valor-software.com/ng2-charts/)


Chart
---
```html
    <base-chart class="chart" *ngIf="graphVisible"
               [data]="chartData"
               [labels]="chartLabels"
               [chartType]="chartType">
    </base-chart>
```
![Bar Chart](bar-chart.png)
