export class Activity {
    private date: Date;
    private name: string;
    private description: string = '';
    constructor(date: Date, name: string, description: string = '') {
        this.date = date;
        this.name = name;
        this.description = description;
    }
    public getDate(): Date {
        return this.date;
    }
    public getName(): string {
        return this.name;
    }
    public getDescription(): string {
        return this.description;
    }
    
}