import { FamillyMember } from "../../entities/FamillyMember";

/**
 * 
 */
export interface FamillyMemberService {

    /**
     * 
     * @param id 
     */
    findById(id: number): Promise<FamillyMember>;

}