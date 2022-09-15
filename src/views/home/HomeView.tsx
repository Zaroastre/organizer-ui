import { Card } from "../../components/card/Card";
import "../views.css";
import "./HomeView.css";

interface HomeViewProperties {

}

class MenuItem {
    private url: string = '';
    private title: string = '';
    constructor(url: string, title: string) {
        this.url = url;
        this.title = title;
    }

    public getUrl(): string {
        return this.url;
    }
    public getTitle(): string {
        return this.title;
    }

}

export function HomeView({ }: HomeViewProperties) {

    const menuItems: Array<MenuItem> = new Array(
        new MenuItem("familly", "Famille"),
        new MenuItem("todo", "Tâches à faire"),
        new MenuItem("planning", "Planning"),
        new MenuItem("pantry", "Garde-Manger"),
        new MenuItem("shopping", "Courses"),
        new MenuItem("meal", "Repas"),
        new MenuItem("cooking-recipe", "Recettes de cuisine"),
        new MenuItem("settings", "Paramètres"),
    );

    return (<section className="View" id="home">
        <h1>{(new Date().getHours() < 17) ? "Bonjour" : "Bonsoir"} Truc de la famille Bidule!</h1>
        <div>
            <div className="bloc">
                <Card title={"Famille"} subtile={"Définissez les membres de votre famille."} link={"familly"} />
            </div>
            <hr />
            <div className="bloc">
                <Card title={"Tâches à faire"} subtile={"Définissez les tâches à faire."} link={"todo"} />
                <Card title={"Planning"} subtile={"Définissez la répartition de votre temps."} link={"planning"} />
            </div>
            <hr />
            <div className="bloc">
                <Card title={"Garde-Manger"} subtile={"Définissez vos stocks de provisions."} link={"pantry"} />
                <Card title={"Liste de courses"} subtile={"Définissez votre liste de course. "} link={"shopping"} />
            </div>
            <hr />
            <div className="bloc">
                <Card title={"Repas"} subtile={"Définissez les repas que vous voulez manger. "} link={"meal"} />
                <Card title={"Recettes de cuisine"} subtile={"Définissez vos recettes de cuisine. "} link={"cooking-recipe"} />
            </div>
            <hr />
            <div className="bloc">
                <Card title={"Paramètes"} subtile={"Configurez l'application. "} link={"settings"} />
            </div>
        </div>
    </section>);
};