import { useEffect, useState } from "react";
import { MemberCreator } from "../../components/memberCreator/MemberCreator";
import { MembersList } from "../../components/membersList/MembersList";
import { FamillyMember } from "../../entities/FamillyMember";
import { FamillyMemberService } from "../../services/familly/FamillyMemberService";
import "../views.css";

interface FamillyViewProperties {
    famillyService: FamillyMemberService;
}

export function FamillyView({ famillyService }: FamillyViewProperties) {

    const [famillyMembers, setFamillyMembers] = useState<Array<FamillyMember>>(new Array());

    useEffect(() => {
        famillyService.listMembers().then((membersList) => {
            setFamillyMembers(membersList);
        }).catch((reason) => {
            console.error(reason);
        })
    },  []);

    const onAddedMemberHandler = (member: FamillyMember) => {
        famillyService.listMembers().then((membersList) => {
            setFamillyMembers(new Array(...membersList));
        }).catch((reason) => {
            console.error(reason);
        })
    }
    
    return (<section className="FamillyView View" id="home">
        <h1>Ma Famille</h1>
        <div>
            <MemberCreator famillyService={famillyService} onAddedMember={onAddedMemberHandler} />
            <MembersList values={famillyMembers} />
        </div>
    </section>);
};