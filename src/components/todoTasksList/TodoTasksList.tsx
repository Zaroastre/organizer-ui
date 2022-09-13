import { Activity } from "../../entities/Activity";

interface TodoTasksListProperties {
    values: Array<Activity>;
}

export function TodoTasksList({ values }:TodoTasksListProperties) {
    return (<section>
        <table>
            <thead>
                <tr>
                    <th>Starting Date</th>
                    <th>Terminate Date</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Periodicity</th>
                </tr>
            </thead>
            <tbody>
                {values.map((activity) => <tr>
                    <th>{activity.getStartingDate().toISOString()}</th>
                    <th>{activity.getTerminateDate().toISOString()}</th>
                    <th>{activity.getName()}</th>
                    <th>{activity.getDescription()}</th>
                    <th></th>

                </tr>)}
            </tbody>
        </table>
    </section>);
}