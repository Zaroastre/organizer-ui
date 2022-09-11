import { Activity } from "../../entities/Activity";
import { Product } from "../../entities/Product";
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
            this.activities.push(new Activity(
                new Date(2022, 8, 5, 10, 15),
                "Test"
            ))
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