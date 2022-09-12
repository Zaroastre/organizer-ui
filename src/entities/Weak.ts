import { Day } from "./Day";

export const TOTAL_DAYS_IN_WEAK: number = 7;


export class Weak {
    private days: Array<Day>;
    private weakNumber: number;
    constructor(weakNumber: number, days: Array<Day>) {
        this.weakNumber = weakNumber;
        this.days = days;
    }
    public getDays(): Array<Day> {
        return this.days;
    }

    public static getNumberOfTheWeak = (date: Date) => {
        let now: Date = date;
        let start: Date = new Date(now.getFullYear(), 0, 1);
        let days = Math.floor((now.getTime() - start.getTime()) /
            (24 * 60 * 60 * 1000));
        return Math.ceil(days / 7);
    }
}

export class WeakFactory {

    private static computeNextDay(day: Date): Date {
        
        let nextDate: Date;
        nextDate = new Date(day.setDate(day.getDate()+1));
        if (nextDate.getDate() < day.getDate()) {
            nextDate = new Date(nextDate.setMonth(nextDate.getMonth()+1));
            if (day.getMonth() < day.getMonth()) {
                nextDate = new Date(day.setFullYear(day.getFullYear()+1));
            }
        }
        return nextDate;        
    }
    public static create(weakNumber: number, year: number): Weak {
        let days: Array<Day> = new Array(TOTAL_DAYS_IN_WEAK);
        const MONDAY_VALUE: number = 2;
        let monday = new Date(year, 0, (MONDAY_VALUE + (weakNumber - 1) * TOTAL_DAYS_IN_WEAK));
        let dayOfTheWeak: Date = monday;
        for (let index = 0; index < TOTAL_DAYS_IN_WEAK; index++) {
            days[index] = new Day(WeakFactory.computeNextDay(dayOfTheWeak));
        }
        return new Weak(weakNumber, days);
    }
}