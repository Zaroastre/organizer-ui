import "../views.css";

interface TodoListViewProperties {
    
}

export function TodoListView({ }: TodoListViewProperties) {
    
    return (<section className="View" id="home">
        <h1>Liste des tâches à faire</h1>
        <div>
            {/* <TaskCreator />
            <TodoTasksList values={[]} /> */}
        </div>
    </section>);
};