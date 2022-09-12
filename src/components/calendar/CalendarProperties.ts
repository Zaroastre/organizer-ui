import { CalendarViewType } from "../../commons/CalendarViewType";
import { Activity } from "../../entities/Activity";
import { Day } from "../../entities/Day";

export interface CalendarProperties {
    events: Array<Activity>;
    now: Day;
    minHour?: number,
    maxHour?:number,
    view?: CalendarViewType;
}