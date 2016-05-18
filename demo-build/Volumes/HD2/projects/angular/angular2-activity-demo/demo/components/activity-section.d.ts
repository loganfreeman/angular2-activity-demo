import { ActivityService } from '../activity.service';
import { Activity } from '../activity';
export declare class ActivitySectionComponent {
    private activityService;
    constructor(activityService: ActivityService);
    activities: Activity[];
    errorMessage: any;
    chartData: number[];
    chartLabels: string[];
    graphVisible: boolean;
    chartType: string;
    toggleGraph(): void;
    hasActivities(): string[];
    generateChart(): void;
    loadActivities(): void;
    chartClicked(e: any): void;
    chartHovered(e: any): void;
}
