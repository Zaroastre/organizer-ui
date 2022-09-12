import { FamillyMember } from "../../entities/FamillyMember";
import { FamillyMemberService } from "./FamillyMemberService";

export class FamillyMemberRestServiceProvider implements FamillyMemberService {

    private static instance: FamillyMemberService;

    /**
     * Get the unique instance (or create it if it's doesn't exists) of this service provider.
     *  
     * @returns The unique instance of this service provider.
     */
    static getInstance(): FamillyMemberService {
        if (!FamillyMemberRestServiceProvider.instance) {
            FamillyMemberRestServiceProvider.instance = new FamillyMemberRestServiceProvider()
        }
        return FamillyMemberRestServiceProvider.instance;
    }

    /**
     * Constructor for this service provider.
     */
    private constructor() {
        
    }
    
    findById(id: number): Promise<FamillyMember> {
        return new Promise<FamillyMember>((accept, reject) => {
            reject(new Error("Method not implemented."));
        });
    }
    
};