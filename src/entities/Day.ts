export class Day {
    private date: Date;
    constructor(date: Date) {
        this.date = date;
    }
    public getDate(): Date {
        return this.date;
    }
}