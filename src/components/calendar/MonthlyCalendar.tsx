import { useEffect, useState } from "react";
import { CalendarViewType } from "../../commons/CalendarViewType";
import { DayOfWeek } from "../../commons/DayOfWeek";
import { Month } from "../../commons/Month";
import { Activity } from "../../entities/Activity";
import "./Calendar.css";

interface MonthlyCalendarProperties {
    events: Array<Activity>;
}

export function MonthlyCalendar({ events }: MonthlyCalendarProperties) {

    const TOTAL_MONTHS: number = 12;
    const NOW: Date = new Date();
    const TOTAL_ROWS: number = 6;
    const TOTAL_COLUMNS: number = 7;

    const [date, setDate] = useState(new Date());
    const [workingDate, setWorkingDate] = useState(new Date());
    const [activities, setActivities] = useState(new Array<Activity>());

    useEffect(() => {
        setWorkingDate(date);
    }, [date])


    const changeToPreviousMonth = () => {
        let date = workingDate;
        if (date.getMonth() == 0) {
            date.setMonth(TOTAL_MONTHS - 1);
            date.setFullYear(date.getFullYear() - 1);
        } else {
            date.setMonth(date.getMonth() - 1);
        }
        if (date.getMonth() == NOW.getMonth()) {
            date.setDate(NOW.getDate());
        } else {
            date.setDate(1);
        }
        setDate(new Date(date.getTime()));
    }

    const changeToNextMonth = () => {
        let date = workingDate;
        if (date.getMonth() + 1 == TOTAL_MONTHS) {
            date.setMonth(0);
            date.setFullYear(date.getFullYear() + 1);
        } else {
            date.setMonth(date.getMonth() + 1);
        }
        if (date.getMonth() == NOW.getMonth()) {
            date.setDate(NOW.getDate());
        } else {
            date.setDate(1);
        }
        setDate(new Date(date.getTime()));
    }


    const getFirstDayOfWeakOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay() - 1;
    }

    const getTotalDaysInMonth = (year: number, month: number) => {
        return new Date(year, month, 0).getDate();
    }

    const displayDaysNameHeader = () => {
        const daysNames: Array<JSX.Element> = new Array();
        for (let index = 0; index < TOTAL_COLUMNS; index++) {
            daysNames.push(<th>{String(DayOfWeek[index])}</th>)
        }
        return daysNames.map((dayName) => dayName)
    }

    const displayMonth = (month: number) => {
        const totalDaysInMonth: number = getTotalDaysInMonth(workingDate.getFullYear(), month);
        const firstDayOfWeakOfMonth: number = getFirstDayOfWeakOfMonth(workingDate.getFullYear(), month);

        let weaks: Array<JSX.Element> = new Array();
        let workingDay: number = 0 - firstDayOfWeakOfMonth;
        for (let index = 0; index < TOTAL_ROWS; index++) {
            let daysOfWeak: Array<JSX.Element> = new Array();
            for (let index = 0; index < TOTAL_COLUMNS; index++) {
                if ((workingDay >= 0) && (workingDay < totalDaysInMonth)) {
                    if (workingDate.getDate() == workingDay + 1) {
                        daysOfWeak.push((<td className="lime accent-4">{workingDay + 1}</td>));
                    } else {
                        daysOfWeak.push((<td>{workingDay + 1}</td>));
                    }
                } else {
                    daysOfWeak.push((<td className="grey darken-1"></td>));
                }
                workingDay++;
            }
            weaks.push((<tr>
                {daysOfWeak.map((day) => day)}
            </tr>));
        }
        return weaks.map((weak) => weak);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={TOTAL_COLUMNS} className="center">
                        <button
                            type="button"
                            className="waves-effect waves-light btn"
                            onClick={changeToPreviousMonth}>
                            {Month[workingDate.getMonth() - 1]}
                            <i className="material-icons right">chevron_left</i>
                        </button>
                        {Month[workingDate.getMonth()] + " " + workingDate.getFullYear()}
                        <button
                            type="button"
                            className="waves-effect waves-light btn"
                            onClick={changeToNextMonth}>
                            <i className="material-icons left">chevron_right</i>
                            {Month[workingDate.getMonth() + 1]}
                        </button>
                    </th>
                </tr>
                <tr>
                    {displayDaysNameHeader()}
                </tr>
            </thead>
            <tbody>
                {displayMonth(workingDate.getMonth())}
            </tbody>
        </table>
    );
}