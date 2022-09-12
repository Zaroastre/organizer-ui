import { MockDB } from "../../commons/MockDB";
import { FamillyMember } from "../../entities/FamillyMember";
import { FamillyMemberService } from "./FamillyMemberService";

export class FamillyMemberMockServiceProvider implements FamillyMemberService {

    private static instance: FamillyMemberService;

    /**
     * Get the unique instance (or create it if it's doesn't exists) of this service provider.
     *  
     * @param mustInitializaData (Optionnal) Flag to indicate if the service provider embed some data or not.
     * @returns The unique instance of this service provider.
     */
    static getInstance(mustInitializaData: boolean = false): FamillyMemberService {
        if (!FamillyMemberMockServiceProvider.instance) {
            FamillyMemberMockServiceProvider.instance = new FamillyMemberMockServiceProvider(mustInitializaData);
        }
        return FamillyMemberMockServiceProvider.instance;
    }

    /**
     * Generate a random number inside the range including limits (minimum, maximum).
     * 
     * @param min Minimum value to generate.
     * @param max Maximum value to generate.
     * @returns Random number.
     */
    private getRandomNumberInRange(min: number, max: number) { return Math.round(Math.random () * (max - min) + min) ; }

    /**
     * Constructor for this service provider.
     * 
     * @param mustInitializaData (Optionnal) Flag to indicate if the service provider embed some data or not.
     */
    private constructor(mustInitializaData: boolean = false) {
        if (mustInitializaData) {
        }


    }
    
    findById(id: number): Promise<FamillyMember> {
        return new Promise<FamillyMember>((resolve, reject) => {
            
        });
    }

    
};