import { useEffect, useState } from "react";
import { Calendar } from "../../components/calendar/Calendar";
import { FoodCreator } from "../../components/foodCreator/FoodCreator";
import { PantryList } from "../../components/pantryList/PantryList";
import { Activity } from "../../entities/Activity";
import { PlanningService } from "../../services/planning/PlanningService";
import "../views.css";

interface PlanningViewProperties {
    planningService: PlanningService;
}

export function PlanningView({planningService}: PlanningViewProperties) {

    const [activities, setActivities] = useState(new Array<Activity>());

    useEffect(() => {
        refreshListOfFoods();
    }, [activities]);

    const refreshListOfFoods = () => {
        // planningService.listPlanning().then((activitiesList) => {
        //     setActivities(activitiesList);
        // }).catch((reason: any) => {
        //     console.error(reason);
        // });
    }

    

    return (<section className="View" id="planning">
        <h1>Planning</h1>
        <div>
            <Calendar />
        </div>
    </section>);
};