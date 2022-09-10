import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DayOfWeek, DayOfWeekParser } from "../../commons/DayOfWeek";
import { Month, MonthParser } from "../../commons/Month";
import { Activity } from "../../entities/Activity";
import "./Calendar.css";

interface WeaklyCalendarProperties {
    events: Array<Activity>;
}

export function WeaklyCalendar({ events }: WeaklyCalendarProperties) {
    let deltaDays: number = 0;
    const NOW: Date = new Date();
    const TOTAL_ROWS: number = 24;
    const TOTAL_COLUMNS: number = 7;

    
    const getNumberOfTheWeak = (date: Date) => {
        let now: Date = new Date();
        let start: Date = new Date(now.getFullYear(), 0, 1);
        let days = Math.floor((now.getTime() - start.getTime()) /
            (24 * 60 * 60 * 1000));
        return Math.ceil(days / 7);
    }

    const [date, setDate] = useState(NOW);
    const [workingDate, setWorkingDate] = useState(NOW);
    const [selectedWeakNumber, setSelectedWeakNumber] = useState(getNumberOfTheWeak(NOW));
    const [weakNumber, setWeakNumber] = useState(selectedWeakNumber);


    useEffect(() => {
        setWorkingDate(date);
    }, [date]);

    const rollbackToOneWeakInPast = (date: Date) => {

    }

    const jumpToOneWeakInFutur = (date: Date) => {
        
    }

    const computeDaysOfWeak = (date: Date) => {
        
    }
    
    useEffect(() => {
        setSelectedWeakNumber(weakNumber);

    }, [weakNumber]);

    
    const changeToPreviousWeak = () => {
        deltaDays--;
        setSelectedWeakNumber(selectedWeakNumber-1);
        
        setDate(new Date(date.getTime()));
    }

    const changeToNextWeak = () => {
        deltaDays++;
        setSelectedWeakNumber(selectedWeakNumber+1);
        
        setDate(new Date(date.getTime()));
    }



    const displayDaysNameHeader = () => {
        const daysNames: Array<JSX.Element> = new Array();
        daysNames.push(<th></th>)
        for (let index = 0; index < TOTAL_COLUMNS; index++) {
            let deltaDaysFromNow: number  = (DayOfWeekParser.parse(index).valueOf() - DayOfWeekParser.parse(NOW.getDay()).valueOf())+1;
            let deltaMonthFromNow: number = 0;
            if (workingDate.getDate()+deltaDaysFromNow < 0) {
                deltaMonthFromNow = 11;
            } else {
                deltaMonthFromNow = 0;
            }
            let deltaYearFromNow: number = 0;
            daysNames.push(<th>
                {DayOfWeek[index]}
                <br />
                ({workingDate.getDate()+deltaDaysFromNow} {Month[(workingDate.getMonth()+deltaMonthFromNow)].substring(0, 3)} {workingDate.getFullYear()+deltaYearFromNow})
            </th>)
        }
        return daysNames.map((dayName) => dayName)
    }

    const displayWeak = (day: Date) => {
        let days: Array<JSX.Element> = new Array();
        for (let hour = 0; hour < TOTAL_ROWS-0; hour++) {
            let hoursInDay: Array<JSX.Element> = new Array();
            for (let day = 0; day < TOTAL_COLUMNS + 1; day++) {
                if (day == 0) {
                    hoursInDay.push((<td>{hour}:00</td>));
                } else {
                    if (day == NOW.getDay()) {
                        if (hour == NOW.getHours()) {
                            hoursInDay.push((<td className="lime accent-4">
                                <Link
                                    to={String("/planning/")
                                        .concat(String(workingDate.getFullYear()))
                                        .concat("/")
                                        .concat(String(workingDate.getMonth()))
                                        .concat("/")
                                        .concat(String(workingDate.getDate()))}
                                >
                                    go
                                </Link>
                            </td>));
                        } else {
                            hoursInDay.push((<td className="lime lighten-4"><Link to="/" /></td>));
                        }
                    } else {
                        hoursInDay.push((<td><Link to="/" /></td>));
                    }
                }
            }
            days.push((<tr>
                {hoursInDay.map((hour) => hour)}
            </tr>));

        }
        return days.map((day) => day);
    }

    useEffect(() => {
        setWorkingDate(date);
    }, [date])

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={TOTAL_COLUMNS} className="center">
                        <button
                            type="button"
                            className="waves-effect waves-light btn"
                        onClick={changeToPreviousWeak}
                        >
                            {"Semaine " + (selectedWeakNumber - 1)}
                            <i className="material-icons right">chevron_left</i>
                        </button>
                        {"Semaine " + selectedWeakNumber}
                        <button
                            type="button"
                            className="waves-effect waves-light btn"
                        onClick={changeToNextWeak}
                        >
                            <i className="material-icons left">chevron_right</i>
                            {"Semaine " + (selectedWeakNumber + 1)}
                        </button>
                    </th>
                </tr>
                <tr>
                    {displayDaysNameHeader()}
                </tr>
            </thead>

            <tbody>
                {displayWeak(workingDate)}
            </tbody>
        </table>
    );
}
