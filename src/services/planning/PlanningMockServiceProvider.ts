import { PeriodicityType } from "../../commons/PeriodicityType";
import { Activity, ActivityBuilderFactory } from "../../entities/Activity";
import { PlanningService } from "./PlanningService";

export class PlanningMockServiceProvider implements PlanningService {

    private static instance: PlanningService;
    private activities: Activity[];

    static getInstance(mustInitializaData: boolean = false): PlanningService {
        if (!PlanningMockServiceProvider.instance) {
            PlanningMockServiceProvider.instance = new PlanningMockServiceProvider(mustInitializaData);
        }
        return PlanningMockServiceProvider.instance;
    }

    private constructor(mustInitializaData: boolean = false) {
        this.activities = new Array<Activity>();
        if (mustInitializaData) {
            for (let index = 0; index < 10; index++) {
                let now: Date = new Date();
                now = new Date(now.setDate(now.getDate()+index));
                now = new Date(now.setHours(now.getHours()+index));
                let activity = ActivityBuilderFactory.create("Activity", now, PeriodicityType.DAILY).build();
                this.activities.push(activity);
            }
        }
        
    }
    
    schedule(activity: Activity): Promise<Activity> {
        throw new Error("Method not implemented.");
    }
    delete(activity: Activity): Promise<Activity> {
        throw new Error("Method not implemented.");
    }
    listPlanning(): Promise<Activity[]> {
        return new Promise((resolve, reject) => {
            resolve (this.activities);
        })
        
    }

    
    
};