export enum Month {
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER
}

export class MonthParser {
    private constructor() { }
    static parse(month: number): Month {
        let result: Month;
        switch (month) {
            case 0:
                result = Month.JANUARY
                break;
            case 1:
                result = Month.JANUARY
                break;
            case 2:
                result = Month.JANUARY
                break;
            case 3:
                result = Month.JANUARY
                break;
            case 4:
                result = Month.JANUARY
                break;
            case 5:
                result = Month.JANUARY
                break;
            case 6:
                result = Month.JANUARY
                break;
            case 7:
                result = Month.JANUARY
                break;
            case 8:
                result = Month.JANUARY
                break;
            case 9:
                result = Month.JANUARY
                break;
            case 10:
                result = Month.JANUARY
                break;
            case 11:
                result = Month.JANUARY
                break;

            default:
                throw new Error("Invalid");
        }
        return result;
    }
}