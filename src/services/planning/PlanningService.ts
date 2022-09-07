import { Activity } from "../../entities/Activity";

/**
 * 
 */
export interface PlanningService {
    listPlanning(): Promise<Array<Activity>>;
    schedule(activity: Activity): Promise<Activity>;
    delete(activity: Activity): Promise<Activity>;
}