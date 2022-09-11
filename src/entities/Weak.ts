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
}

export class WeakFactory {
    static create(weakNumber: number, year: number): Weak {
        console.log(weakNumber)
        let days: Array<Day> = new Array(TOTAL_DAYS_IN_WEAK);
        const MONDAY_VALUE: number = 2;
        let monday = new Date(year, 0, (MONDAY_VALUE + (weakNumber - 1) * TOTAL_DAYS_IN_WEAK));
        let dayOfTheWeak: Date = monday;
        for (let index = 0; index < TOTAL_DAYS_IN_WEAK; index++) {
            let day: Date = new Date(dayOfTheWeak.setDate(dayOfTheWeak.getDate()+1));
            days[index] = new Day(day);
        }
        return new Weak(weakNumber, days);
    }
}