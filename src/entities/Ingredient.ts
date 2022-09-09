import { Food } from "./Food";

export class Ingredient extends Food {
    private constructor(name: string, id=0, quantity=0) {
        super(name, id, quantity);
    }
}