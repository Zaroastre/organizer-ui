export class FamillyMember {
    private email: string;
    private firstName: string;
    private lastName: string;

    constructor(email: string, firstName: string, lastName: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public getEmail(): string {
        return this.email;
    }
    public getFirstName(): string {
        return this.firstName;
    }
    public getLastName(): string {
        return this.lastName;
    }

}