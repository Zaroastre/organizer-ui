import { Activity } from "./Activity";

export class Day {
    private date: Date;
    private activities: Array<Activity>;

    constructor(date: Date) {
        this.date = date;
        this.activities = new Array();
    }

    public getDate(): Date {
        return this.date;
    }
    public getActivities(): Array<Activity> {
        return this.activities;
    }

    public setActivities(activities: Array<Activity>) {
        this.activities = activities;
    }
}