import { useEffect, useState } from "react";
import { FamillyMember } from "../../entities/FamillyMember";

interface MembersListProperties {
    values: Array<FamillyMember>;
}

export function MembersList({ values }: MembersListProperties) {

    const [famillyMembers, setFamillyMembers] = useState<Array<FamillyMember>>(new Array());

    useEffect(() => {
        setFamillyMembers(values);
    }, [values]);

    return (<table>
        <thead>
            <tr>
                <th>Nom de Famille</th>
                <th>Prénom</th>
                <th>Adresse Email</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody>
            {
                famillyMembers.map((famillyMember) => <tr>
                    <td>{famillyMember.getLastName()}</td>
                    <td>{famillyMember.getFirstName()}</td>
                    <td>{famillyMember.getEmail()}</td>
                    <td></td>
                </tr>)
            }
        </tbody>
    </table>);
}