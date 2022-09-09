import { useState } from "react";
import { DayOfWeek } from "../../commons/DayOfWeek";
import { Month } from "../../commons/Month";
import { Activity } from "../../entities/Activity";

export function Calendar() {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    const now: Date = new Date();
    const TOTAL_ROWS: number = 6;
    const TOTAL_COLUMNS: number = 7;

    const displayDaysNameHeader = () => {
        const daysNames: Array<JSX.Element> = new Array();
        for (let index = 0; index < TOTAL_COLUMNS; index++) {
            daysNames.push(<th>{String(DayOfWeek[index])}</th>)
        }
        return daysNames.map((dayName) => <th>{dayName}</th>)
    }

    const displayWeak = () => {
        let days: Array<JSX.Element> = new Array();
        for (let index = 0; index < TOTAL_COLUMNS; index++) {
            days.push((<td>{index}</td>))
        }
        return days;
    }

    const displayWeaks = () => {
        let weaks: Array<JSX.Element> = new Array();
        for (let index = 0; index < TOTAL_ROWS; index++) {
            let days: Array<JSX.Element> = displayWeak();
            weaks.push((<tr>
                {days.map((day) => day)}
            </tr>));
        }
        return weaks.map((weak) => weak);
    }

    const [activities, setActivities] = useState(new Array<Activity>());
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={TOTAL_COLUMNS}>{String(Month[now.getMonth()])}</th>
                </tr>
                <tr>
                    {displayDaysNameHeader()}
                </tr>
            </thead>
            <tbody>
                {displayWeaks()}
            </tbody>
        </table>
    );
}