import { Activity } from "./Activity";

export class Day {
    private date: Date;
    private activities: Array<Activity>;

    constructor(date: Date) {
        this.date = date;
        this.activities = new Array();
    }

    private static isBefore(source: Date, reference: Date) {
        return source <= reference;
    }
    
    private static isAfter(source: Date, reference: Date) {
        return source >= reference;
    }

    public static isSameDay(date1: Date, date2: Date) {
        return ((date1.getFullYear() == date2.getFullYear()) &&
            (date1.getMonth() == date2.getMonth()) &&
            (date1.getDay() == date2.getDay()));
    }

    public getDate(): Date {
        return this.date;
    }
    public getActivitiesBefore(date: Date): Array<Activity> {
        return this.activities.filter((activity) => activity.getStartingDate() <= date);
    }
    
    public getActivitiesAfter(date: Date): Array<Activity> {
        return this.activities.filter((activity) => activity.getStartingDate() >= date);
    }

    public getActivities(from: Date|null=null, to:Date|null=null, ofDay:Date|null=null, ofHour:Date|null=null): Array<Activity> {
        let result: Array<Activity> = new Array();
        let isProcessed: boolean = false;

        if (ofDay) {
            from = new Date(ofDay.setHours(0,0,0,0));
            to = new Date(ofDay.setHours(23,59,59,999));
        }
        if (ofHour) {
            from = new Date(ofHour.setMinutes(0,0,0));
            to = new Date(ofHour.setMinutes(59,59,999));
        }

        if (from != null && to != null) {
            let start: Date = from;
            let end: Date = to;
            result = this.activities.filter((activity) => (Day.isAfter(activity.getStartingDate(), start) && Day.isBefore(activity.getStartingDate(), end)));
            isProcessed = true;
        } else if (from != null) {
            result = this.getActivitiesAfter(from);
            isProcessed = true;
        } else if (to != null) {
            result = this.getActivitiesBefore(to);
            isProcessed = true;
        }

        if (!isProcessed) {
            result = this.activities;
        }
        return result;
    }

    public setActivities(activities: Array<Activity>) {
        this.activities = activities;
    }
}