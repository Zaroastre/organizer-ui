import { useState } from "react";
import { FamillyMember } from "../../entities/FamillyMember";
import { FamillyMemberService } from "../../services/familly/FamillyMemberService";

interface MemberCreatorProperties {
    famillyService: FamillyMemberService
    onAddedMember: Function;
}

export function MemberCreator({ famillyService, onAddedMember }: MemberCreatorProperties) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const onChangeFirstNameHandler = (event: any) => {
        setFirstName(event.target.value);
    }
    const onChangeLastNameHandler = (event: any) => {
        setLastName(event.target.value);
    }
    const onChangeEmailHandler = (event: any) => {
        setEmail(event.target.value);
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        let member: FamillyMember = new FamillyMember(email, firstName, lastName);
        famillyService.addMember(member).then((createdMember) => {
            onAddedMember(createdMember);
            document.getElementById("reset")?.click();
        }).catch((reason) => {
            console.error(reason);
        })
    }

    return (<section>
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col s12">
                    <div className="input-field col s2">
                        <input id="last-name" type="text" className="validate" required minLength={2} onChange={onChangeLastNameHandler} />
                        <label htmlFor="last-name">Nom de Famille</label>
                    </div>
                    <div className="input-field col s2">
                        <input id="first-name" type="text" className="validate" required minLength={2} onChange={onChangeFirstNameHandler} />
                        <label htmlFor="first-name">Prénom</label>
                    </div>
                    <div className="input-field col s2">
                        <input id="email" type="email" className="validate" required onChange={onChangeEmailHandler} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <button
                        type="submit"
                        className="waves-effect waves-light btn black"
                    >
                        Ajouter
                        <i className="material-icons left">add</i>
                    </button>
                    <button id="reset" type="reset" hidden />
                </div>
            </div>
        </form>
    </section>);

}