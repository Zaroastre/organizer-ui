import { Link } from "react-router-dom";
import { Card } from "../../components/card/Card";
import "../views.css";

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
        new MenuItem("shopping", "Liste des courses"),
        new MenuItem("meal", "Repas"),
        new MenuItem("cooking-recipe", "Recettes de cuisine"),
    );

    return (<section className="View" id="home">
        <h1>{(new Date().getHours() < 17) ? "Bonjour" : "Bonsoir"} Truc de la famille Bidule!</h1>
        <div>
            {
                menuItems.map((menuItem) => (
                    <Card title={menuItem.getTitle()} subtile={menuItem.getTitle()} link={menuItem.getUrl()} />
                ))
            }
        </div>
    </section>);
};