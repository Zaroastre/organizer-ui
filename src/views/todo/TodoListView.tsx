import { TaskCreator } from "../../components/taskCreator/TaskCreator";
import { TodoTasksList } from "../../components/todoTasksList/TodoTasksList";
import { DailyPeriodicity } from "../../entities/Periodicity";
import { Task } from "../../entities/Task";
import "../views.css";

interface TodoListViewProperties {
    
}

export function TodoListView({ }: TodoListViewProperties) {
    
    return (<section className="View" id="home">
        <h1>Tâches à faire</h1>
        <div>
            <TaskCreator />
           <TodoTasksList values={[
            new Task("Couper les haies"),
            new Task("Tondre"),
            new Task("Appeller le notaire"),
            new Task("Régler le permis piscine"),
            new Task("Relancer l'électricien"),
            ]} /> 
        </div>
    </section>);
};