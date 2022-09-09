import { useEffect, useState } from "react";
import { CalendarViewType } from "../../commons/CalendarViewType";
import { Activity } from "../../entities/Activity";
import "./Calendar.css";
import { MonthlyCalendar } from "./MonthlyCalendar";
import { WeaklyCalendar } from "./WeaklyCalendar";

interface CalendarProperties {
    events: Array<Activity>;
    view: CalendarViewType
}

export function Calendar({ events, view }: CalendarProperties) {

    const [activities, setActivities] = useState(new Array<Activity>());
    const [activeView, setActiveView] = useState(view);

    useEffect(() => {
        setActiveView(view);
    }, [view])


    useEffect(() => {
        setActivities(events);
    }, [events])

    let calendar;

    switch (activeView) {
        case CalendarViewType.MONTH:
            calendar = (<MonthlyCalendar events={activities} />)
            break;
        case CalendarViewType.WEAK:
            calendar = (<WeaklyCalendar events={activities} />)

            break;
        case CalendarViewType.DAY:
            calendar = (<></>)

            break;
        default:
            calendar = (<></>)
            break;
    }
    return (calendar);
}