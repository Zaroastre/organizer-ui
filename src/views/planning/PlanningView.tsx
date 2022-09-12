import { useEffect, useState } from "react";
import { CalendarViewType, CalendarViewTypeParser } from "../../commons/CalendarViewType";
import { Calendar } from "../../components/calendar/Calendar";
import { FoodCreator } from "../../components/foodCreator/FoodCreator";
import { PantryList } from "../../components/pantryList/PantryList";
import { Activity } from "../../entities/Activity";
import { Day } from "../../entities/Day";
import { PlanningService } from "../../services/planning/PlanningService";
import "../views.css";
import "./PlanningView.css"

interface PlanningViewProperties {
    planningService: PlanningService;
}

export function PlanningView({planningService}: PlanningViewProperties) {

    const [activities, setActivities] = useState(new Array<Activity>());
    const [calendarView, setCalendarView] = useState<CalendarViewType>(CalendarViewType.WEAK);

    useEffect(() => {
        planningService.listPlanning().then((activitiesList) => {
            setActivities(activitiesList);
        }).catch((reason) => {
            console.error(reason);
        })
    }, [])

    const updateCalendarView = (event: any) => {
        let index: number = parseInt(event.target.value);
        if (index >= 0) {
            setCalendarView(CalendarViewTypeParser.parse(index));
        }
    }
    

    return (<section className="View" id="planning">
        <h1>Planning</h1>
        <div>
            <div>
                <input type="radio" name="calendar-view" id="daily-calendar" value={CalendarViewType.DAY} defaultChecked={calendarView==CalendarViewType.DAY} onChange={updateCalendarView}/>
                <label htmlFor="daily-calendar">Afficher le jour</label>
                <input type="radio" name="calendar-view" id="weakly-calendar" value={CalendarViewType.WEAK} defaultChecked={calendarView==CalendarViewType.WEAK} onChange={updateCalendarView} />
                <label htmlFor="weakly-calendar">Afficher la semaine</label>
                <input type="radio" name="calendar-view" id="monthly-calendar" value={CalendarViewType.MONTH} defaultChecked={calendarView==CalendarViewType.MONTH} onChange={updateCalendarView}/>
                <label htmlFor="monthly-calendar">Afficher le mois</label>

            </div>
            <Calendar now={new Day(new Date())} events={activities} view={calendarView}/>
        </div>
    </section>);
};