import { Task } from "../../entities/Task";

interface TodoTasksListProperties {
    values: Array<Task>;

}

export function TodoTasksList({ values }: TodoTasksListProperties) {
    return (<section>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Affectation</th>
                    <th>Status</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                {values.map((task) => <tr>
                    <th>{task.title}</th>
                    <th>{task.affectations.toString()}</th>
                    <th>{task.isDone}</th>
                    <th></th>

                </tr>)}
            </tbody>
        </table>
    </section>);
}