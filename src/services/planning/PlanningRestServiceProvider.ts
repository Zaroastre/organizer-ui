import { Activity } from "../../entities/Activity";
import { Product } from "../../entities/Product";
import { PlanningService } from "./PlanningService";

export class PlanningRestServiceProvider implements PlanningService {

    private static instance: PlanningService;

    static getInstance(): PlanningService {
        if (!PlanningRestServiceProvider.instance) {
            PlanningRestServiceProvider.instance = new PlanningRestServiceProvider()
        }
        return PlanningRestServiceProvider.instance;
    }

    private constructor() {
        
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