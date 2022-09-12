import { DayOfWeek } from "../commons/DayOfWeek";
import { PeriodicityType } from "../commons/PeriodicityType";
import { DailyPeriodicity, MonthlyPeriodicity, Periodicity, WeaklyPeriodicity } from "./Periodicity";

export class Activity {
    private startingDate: Date;
    private terminateDate: Date;
    private name: string;
    private description: string = '';
    private periodicity: Periodicity|null;

    constructor(startingDate: Date, terminateDate: Date, name: string, description: string = '', periodicity: Periodicity|null=null) {
        this.startingDate = startingDate;
        this.terminateDate = terminateDate;
        this.name = name;
        this.description = description;
        this.periodicity = periodicity;
    }
    public getStartingDate(): Date {
        return this.startingDate;
    }
    public getTerminateDate(): Date {
        return this.terminateDate;
    }
    public getName(): string {
        return this.name;
    }
    public getDescription(): string {
        return this.description;
    }

}

export interface ActivityBuilder {
    build(): Activity;
}

export class ActivityBuilderFactory {
    protected constructor() {

    }

    public static create(name: string, startingDate: Date, periodicity: PeriodicityType) {
        let builder: ActivityBuilder;
        switch (periodicity) {
            case PeriodicityType.DAILY:
                builder = new DailyActivityBuilder(name, startingDate);
                break;
            case PeriodicityType.WEAKLY:
                builder = new WeaklyActivityBuilder(name, startingDate);
                break;
            case PeriodicityType.MONTHLY:
                builder = new MonthlyActivityBuilder(name, startingDate);
                break;
            case PeriodicityType.YEARLY:
                builder = new YearlyActivityBuilder(name, startingDate);
                break;
            default:
                throw new Error("Implementation not found.");
        }
        return builder;
    }
}

export class DailyActivityBuilder implements ActivityBuilder {
    private startingDate: Date;
    private terminateDate: Date;
    private name: string;
    private description: string = '';
    private noEnd: boolean;
    private eachDayOccurence: number;
    private isAllDaysOfWeak: boolean;

    constructor(name: string, startingDate: Date) {
        this.startingDate = startingDate;
        this.terminateDate = this.startingDate;
        this.noEnd = false;
        this.eachDayOccurence = 0;
        this.isAllDaysOfWeak = false;
        this.name = name;
    }
    
    public withTermniateDate(terminateDate: Date): DailyActivityBuilder {
        this.terminateDate = terminateDate;
        return this;
    }

    public withDescription(description: string): DailyActivityBuilder {
        this.description = description;
        return this;
    }
    public withNoEnd(noEnd: boolean): DailyActivityBuilder {
        this.noEnd = noEnd;
        return this;
    }
    public withEachDayOccurence(eachDayOccurence: number): DailyActivityBuilder {
        this.eachDayOccurence = eachDayOccurence;
        return this;
    }
    public withIsAllDaysOfWeak(isAllDaysOfWeak: boolean): DailyActivityBuilder {
        this.isAllDaysOfWeak = isAllDaysOfWeak;
        return this;
    }

    public build(): Activity {
        let periodicity = new DailyPeriodicity(
            this.startingDate,
            this.terminateDate,
            this.noEnd,
            this.eachDayOccurence,
            this.isAllDaysOfWeak
            );
        return new Activity(this.startingDate, this.terminateDate, this.name, this.description, periodicity);
    }
}

export class WeaklyActivityBuilder implements ActivityBuilder {
    private startingDate: Date;
    private terminateDate: Date;
    private name: string;
    private description: string = '';
    private noEnd: boolean;
    private eachWeakOccurence: number;
    private daysOfTheWeak: Array<DayOfWeek>;
    
    constructor(name: string, startingDate: Date) {
        this.startingDate = startingDate;
        this.name = name;
        this.terminateDate = this.startingDate;
        this.noEnd = false;
        this.eachWeakOccurence = 0;
        this.daysOfTheWeak = new Array();
    }

    public withTermniateDate(terminateDate: Date): WeaklyActivityBuilder {
        this.terminateDate = terminateDate;
        return this;
    }
    
    public withDescription(description: string): WeaklyActivityBuilder {
        this.description = description;
        return this;
    }
    public withNoEnd(noEnd: boolean): WeaklyActivityBuilder {
        this.noEnd = noEnd;
        return this;
    }
    public build(): Activity {
        let periodicity = new WeaklyPeriodicity(
            this.startingDate,
            this.terminateDate,
            this.noEnd,
            this.eachWeakOccurence,
            this.daysOfTheWeak
            );
        return new Activity(this.startingDate, this.terminateDate, this.name, this.description, periodicity);
    }
}

export class MonthlyActivityBuilder implements ActivityBuilder {
    private startingDate: Date;
    private terminateDate: Date;
    private name: string;
    private description: string = '';
    private noEnd: boolean;
    private eachDayOfTheMonth: number; // Le 29 <mois>
    private eachMonthInterval: number; // Tous les 2 mois
    private dayOfWeakOnMonth: number; //Le DEUXIEME <jours de la semaine>
    private dayOfWeak: DayOfWeek; // Le <n> MARDI

    
    constructor(name: string, startingDate: Date) {
        this.startingDate = startingDate;
        this.name = name;
        this.terminateDate = this.startingDate;
        this.noEnd = false;
        this.eachDayOfTheMonth = 1;
        this.eachMonthInterval = 1;
        this.dayOfWeakOnMonth = 1;
        this.dayOfWeak = DayOfWeek.MONDAY;
    }

    public withTermniateDate(terminateDate: Date): MonthlyActivityBuilder {
        this.terminateDate = terminateDate;
        return this;
    }
    
    public withDescription(description: string): MonthlyActivityBuilder {
        this.description = description;
        return this;
    }
    public withNoEnd(noEnd: boolean): MonthlyActivityBuilder {
        this.noEnd = noEnd;
        return this;
    }

    public build(): Activity {
        let periodicity = new MonthlyPeriodicity(
            this.startingDate,
            this.terminateDate,
            this.noEnd,
            this.eachDayOfTheMonth,
            this.eachMonthInterval,
            this.dayOfWeakOnMonth,
            this.dayOfWeak
            );
        return new Activity(this.startingDate, this.terminateDate, this.name, this.description, periodicity);
    }
}

export class YearlyActivityBuilder implements ActivityBuilder {
    private startingDate: Date;
    private terminateDate: Date;
    private name: string;
    private description: string = '';
    private noEnd: boolean;

    
    constructor(name: string, startingDate: Date) {
        this.startingDate = startingDate;
        this.name = name;
        this.noEnd = false;
        this.terminateDate = this.startingDate;
    }
    
    public withTermniateDate(terminateDate: Date): YearlyActivityBuilder {
        this.terminateDate = terminateDate;
        return this;
    }
    
    public withDescription(description: string): YearlyActivityBuilder {
        this.description = description;
        return this;
    }
    public withNoEnd(noEnd: boolean): YearlyActivityBuilder {
        this.noEnd = noEnd;
        return this;
    }

    public build(): Activity {
        throw new Error("Method not implemented.");
    }
}