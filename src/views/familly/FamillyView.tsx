import { MemberCreator } from "../../components/memberCreator/MemberCreator";
import { MembersList } from "../../components/membersList/MembersList";
import "../views.css";

interface FamillyViewProperties {
    
}

export function FamillyView({ }: FamillyViewProperties) {
    
    return (<section className="FamillyView View" id="home">
        <h1>Ma Famille</h1>
        <div>
            <MemberCreator />
            <MembersList values={[]} />
        </div>
    </section>);
};