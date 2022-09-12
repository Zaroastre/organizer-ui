import { FamillyMember } from "./FamillyMember";

export class Task {
    title: string;
    affectations: Array<FamillyMember>;
    isDone: boolean;
    
    constructor(title: string) {
        this.title = title;
        this.affectations = new Array();
        this.isDone = false;
    }
}