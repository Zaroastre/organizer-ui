import { FamillyMember } from "../../entities/FamillyMember";

/**
 * 
 */
export interface FamillyMemberService {

    findByEmail(email: string): Promise<FamillyMember>;
    addMember(member: FamillyMember): Promise<FamillyMember>;
    deleteById(id: number): Promise<FamillyMember>;
    listMembers(): Promise<Array<FamillyMember>>;
}