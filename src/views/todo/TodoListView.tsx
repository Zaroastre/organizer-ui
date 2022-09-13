import { TaskCreator } from "../../components/taskCreator/TaskCreator";
import { TodoTasksList } from "../../components/todoTasksList/TodoTasksList";
import { Activity } from "../../entities/Activity";
import { DailyPeriodicity } from "../../entities/Periodicity";
import "../views.css";

interface TodoListViewProperties {
    
}

export function TodoListView({ }: TodoListViewProperties) {
    
    return (<section className="View" id="home">
        <h1>Liste des tâches à faire</h1>
        <div>
            <TaskCreator />
           <TodoTasksList values={[new Activity(new Date(), new Date(), "test", "Descrption", new DailyPeriodicity(new Date(), new Date(), false, 1, false))]} /> 
        </div>
    </section>);
};