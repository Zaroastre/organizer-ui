import { useEffect, useState } from "react";
import { CalendarViewType } from "../../commons/CalendarViewType";
import { Activity } from "../../entities/Activity";
import { Day } from "../../entities/Day";
import "./Calendar.css";
import { CalendarProperties } from "./CalendarProperties";
import { DailyCalendar } from "./DailyCalendar";
import { MonthlyCalendar } from "./MonthlyCalendar";
import { WeaklyCalendar } from "./WeaklyCalendar";



export function Calendar({ now, events, view }: CalendarProperties) {

    const [activities, setActivities] = useState(new Array<Activity>());
    const [activeView, setActiveView] = useState(view);
    const [currentDay, setCurretnDay] = useState(now);
    const [minHour, setMinHour] = useState(6);
    const [maxHour, setMaxHour] = useState(19);

    useEffect(() => {
        setActiveView(view);
    }, [view])


    useEffect(() => {
        setActivities(events);
    }, [events])

    let calendar;

    switch (activeView) {
        case CalendarViewType.MONTH:
            calendar = (<MonthlyCalendar now={currentDay} events={activities} minHour={minHour} maxHour={maxHour} />)
            break;
        case CalendarViewType.WEAK:
            calendar = (<WeaklyCalendar now={currentDay} events={activities} minHour={minHour} maxHour={maxHour} />)
            break;
        case CalendarViewType.DAY:
            calendar = (<DailyCalendar now={currentDay} events={activities} minHour={minHour} maxHour={maxHour} />)
            break;
        default:
            calendar = (<></>)
            break;
    }
    return (calendar);
}