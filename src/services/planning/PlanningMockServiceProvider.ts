import { Activity } from "../../entities/Activity";
import { Product } from "../../entities/Product";
import { PlanningService } from "./PlanningService";

export class PlanningMockServiceProvider implements PlanningService {

    private static instance: PlanningService;
    private activities: Activity[];

    static getInstance(isEmpty: boolean = false): PlanningService {
        if (!PlanningMockServiceProvider.instance) {
            PlanningMockServiceProvider.instance = new PlanningMockServiceProvider(isEmpty);
        }
        return PlanningMockServiceProvider.instance;
    }

    
    private constructor(isEmpty: boolean = false) {
        this.activities = new Array<Product>();
        
    }
    
    schedule(activity: Activity): Promise<Activity> {
        throw new Error("Method not implemented.");
    }
    delete(activity: Activity): Promise<Activity> {
        throw new Error("Method not implemented.");
    }
    listPlanning(): Promise<Activity[]> {
        throw new Error("Method not implemented.");
        
    }

    
    
};