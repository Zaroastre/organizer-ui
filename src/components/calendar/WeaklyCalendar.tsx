import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DayOfWeek, DayOfWeekParser } from "../../commons/DayOfWeek";
import { Month } from "../../commons/Month";
import { Activity } from "../../entities/Activity";
import { Day } from "../../entities/Day";
import { Weak, WeakFactory } from "../../entities/Weak";
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
        return Math.ceil(days / 7) - 1;
    }

    const [date, setDate] = useState(NOW);
    const [workingDate, setWorkingDate] = useState(NOW);
    const [selectedWeakNumber, setSelectedWeakNumber] = useState(getNumberOfTheWeak(NOW));
    const [weakNumber, setWeakNumber] = useState(selectedWeakNumber);
    const [weak, setWeak] = useState(WeakFactory.create(weakNumber, workingDate.getFullYear()));


    useEffect(() => {
        setWorkingDate(date);
        setWeak(WeakFactory.create(weakNumber, date.getFullYear()));
    }, [date]);

    const rollbackToOneWeakInPast = (date: Date) => {

    }

    const jumpToOneWeakInFutur = (date: Date) => {

    }

    const computeDaysOfWeak = (date: Date) => {

    }

    useEffect(() => {
        setWeakNumber(selectedWeakNumber);
        setWeak(WeakFactory.create(selectedWeakNumber, date.getFullYear()));

    }, [selectedWeakNumber]);


    const changeToPreviousWeak = () => {
        let newWeakNumber: number =selectedWeakNumber - 1;
        setSelectedWeakNumber(newWeakNumber);
        setDate(new Date(date.getTime()));
    }

    const changeToNextWeak = () => {
        let newWeakNumber: number =selectedWeakNumber + 1;
        setSelectedWeakNumber(newWeakNumber);
        setDate(new Date(date.getTime()));
    }



    const displayDaysNameHeader = () => {
        const daysNames: Array<JSX.Element> = new Array();
        daysNames.push(<th></th>)

        weak.getDays().forEach((day) => {
            daysNames.push((<th>
                {DayOfWeek[day.getDate().getDay() - 1]}
                <br />
                ({day.getDate().getDate()} {Month[(workingDate.getMonth())].substring(0, 3)} {workingDate.getFullYear()})
            </th>));
        })
        return daysNames.map((dayName) => dayName)
    }

    const displayWeak = () => {
        let weak: Weak = WeakFactory.create(weakNumber, workingDate.getFullYear());
        let days: Array<JSX.Element> = new Array();
        for (let hour = 0; hour < TOTAL_ROWS - 0; hour++) {
            let hoursInDay: Array<JSX.Element> = new Array();
            for (let day = 0; day < TOTAL_COLUMNS + 1; day++) {
                if (day === 0) {
                    hoursInDay.push((<td>{hour}:00</td>));
                } else {
                    let dayOfTheWeak: Day = weak.getDays()[day - 1];
                    let cellContent = (<Link
                        to={String("/planning/")
                            .concat(String(dayOfTheWeak.getDate().getFullYear()))
                            .concat("/")
                            .concat(String(dayOfTheWeak.getDate().getMonth()))
                            .concat("/")
                            .concat(String(dayOfTheWeak.getDate().getDate()))}
                    >
                        go
                    </Link>);
                    if (day === NOW.getDay()) {
                        if (hour === NOW.getHours()) {
                            hoursInDay.push((<td className="lime accent-4">
                                {cellContent}
                            </td>));
                        } else {
                            hoursInDay.push((<td className="lime lighten-4">{cellContent}</td>));
                        }
                    } else {
                        hoursInDay.push((<td>{cellContent}</td>));
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
                            {`Semaine ${selectedWeakNumber - 1}`}
                            <i className="material-icons right">chevron_left</i>
                        </button>
                        {`Semaine ${selectedWeakNumber}`}

                        <button
                            type="button"
                            className="waves-effect waves-light btn"
                            onClick={changeToNextWeak}
                        >
                            <i className="material-icons left">chevron_right</i>
                            {`Semaine ${selectedWeakNumber + 1}`}
                        </button>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    {weak.getDays().map((day) => (<th>
                        {DayOfWeek[day.getDate().getDay()-1]}
                        <br />
                        ({day.getDate().getDate()} {Month[(workingDate.getMonth())].substring(0, 3)} {workingDate.getFullYear()})
                    </th>))}
                </tr>
            </thead>

            <tbody>
                {displayWeak()}
            </tbody>
        </table>
    );
}
