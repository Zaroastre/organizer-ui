import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DayOfWeek, DayOfWeekParser } from "../../commons/DayOfWeek";
import { Month } from "../../commons/Month";
import { Activity } from "../../entities/Activity";
import { Day } from "../../entities/Day";
import { Weak, WeakFactory } from "../../entities/Weak";
import { CalendarProperties } from "./CalendarProperties";
import "./Calendar.css";

export function WeaklyCalendar({ now, events, minHour=0, maxHour=23 }: CalendarProperties) {
    const NOW: Date = new Date();
    const TOTAL_ROWS: number = maxHour+1;
    const TOTAL_COLUMNS: number = 7;


    const getNumberOfTheWeak = (date: Date) => {
        let now: Date = date;
        let start: Date = new Date(now.getFullYear(), 0, 1);
        let days = Math.floor((now.getTime() - start.getTime()) /
            (24 * 60 * 60 * 1000));
        return Math.ceil(days / 7);
    }

    const [date, setDate] = useState(NOW);
    const [workingDate, setWorkingDate] = useState(NOW);
    const [selectedWeakNumber, setSelectedWeakNumber] = useState(getNumberOfTheWeak(NOW));
    const [weakNumber, setWeakNumber] = useState(selectedWeakNumber);
    const [weak, setWeak] = useState(WeakFactory.create(weakNumber, workingDate.getFullYear()));


    const isSameDay = (date1: Date, date2: Date) => {
        return ((date1.getFullYear() == date2.getFullYear()) &&
            (date1.getMonth() == date2.getMonth()) &&
            (date1.getDay() == date2.getDay()));
    }

    const synchronizeActivitiesForCurrentWeak = () => {
        let newWeak: Weak = WeakFactory.create(weakNumber, date.getFullYear());
        let eventsOfTheWeak: Array<Activity> = events.filter(
            (event) => (newWeak.getDays()[0].getDate() <= event.getStartingDate()) && (event.getStartingDate() <= newWeak.getDays()[newWeak.getDays().length - 1].getDate()));
        for (const day of newWeak.getDays()) {
            let activitiesOfTheDay: Array<Activity> = new Array();
            eventsOfTheWeak.forEach((activity) => {
                if (isSameDay(day.getDate(), activity.getStartingDate())) {
                    activitiesOfTheDay.push(activity);
                }
            })
            day.setActivities(activitiesOfTheDay);
        }
        setWeak(newWeak);
    }

    useEffect(() => {
        setWorkingDate(date);
        setWeak(WeakFactory.create(weakNumber, date.getFullYear()));
        synchronizeActivitiesForCurrentWeak();
    }, [date]);

    useEffect(() => {
        synchronizeActivitiesForCurrentWeak();
    }, [events]);

    useEffect(() => {
        setWeakNumber(selectedWeakNumber);
        setWeak(WeakFactory.create(selectedWeakNumber, date.getFullYear()));
        synchronizeActivitiesForCurrentWeak();
    }, [selectedWeakNumber]);


    const changeToPreviousWeak = () => {
        let newWeakNumber: number = selectedWeakNumber - 1;
        setSelectedWeakNumber(newWeakNumber);
        setDate(new Date(date.getTime()));
    }

    const changeToNextWeak = () => {
        let newWeakNumber: number = selectedWeakNumber + 1;
        setSelectedWeakNumber(newWeakNumber);
        setDate(new Date(date.getTime()));
    }

    const displayWeak = () => {
        let days: Array<JSX.Element> = new Array();
        for (let hour = minHour; hour < TOTAL_ROWS - 0; hour++) {
            let hoursInDay: Array<JSX.Element> = new Array();
            for (let day = 0; day < TOTAL_COLUMNS + 1; day++) {
                if (day === 0) {
                    hoursInDay.push((<td className="hours">{hour}:00</td>));
                } else {
                    let dayOfTheWeak: Day = weak.getDays()[day - 1];
                    let dateTime: Date = new Date(dayOfTheWeak.getDate().setHours(hour))
                    let cellContent = (<Link
                        to={String("/planning/")
                            .concat(String(dateTime.getFullYear()))
                            .concat("/")
                            .concat(String(dateTime.getMonth()))
                            .concat("/")
                            .concat(String(dateTime.getDate()))
                        }
                    >
                        {(dayOfTheWeak.getActivities().length > 0) ? (dayOfTheWeak.getActivities(null, null, null, dateTime).length) : (null) } 
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

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={TOTAL_COLUMNS} className="center">
                        <button
                            type="button"
                            className="waves-effect waves-light btn black"
                            onClick={changeToPreviousWeak}
                        >
                            {`Semaine ${selectedWeakNumber - 1}`}
                            <i className="material-icons right">chevron_left</i>
                        </button>
                        {`Semaine ${selectedWeakNumber}`}

                        <button
                            type="button"
                            className="waves-effect waves-light btn black"
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
                        {DayOfWeek[DayOfWeekParser.parse(day.getDate().getDay()) - 1]}
                        <br />
                        ({day.getDate().getDate()} {Month[(day.getDate().getMonth())].substring(0, 3)} {day.getDate().getFullYear()})
                    </th>))}
                </tr>
            </thead>

            <tbody>
                {displayWeak()}
            </tbody>
        </table>
    );
}
