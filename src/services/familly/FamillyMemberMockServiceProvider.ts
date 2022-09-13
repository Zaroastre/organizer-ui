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
    * Constructor for this service provider.
    */
    private constructor(mustInitializaData: boolean) {

    }

    findByEmail(email: string): Promise<FamillyMember> {
        return new Promise((resolve, reject) => {

        });
    }
    addMember(member: FamillyMember): Promise<FamillyMember> {
        return new Promise((resolve, reject) => {
            MockDB.FAMILLY.push(member);
            resolve(member);
        });
    }
    deleteById(id: number): Promise<FamillyMember> {
        return new Promise((resolve, reject) => {

        });
    }
    listMembers(): Promise<FamillyMember[]> {
        return new Promise((resolve, reject) => {
            resolve(MockDB.FAMILLY);
        });
    }

};