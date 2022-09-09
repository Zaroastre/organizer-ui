import { Edible } from "./Edible";
import { Identifiable } from "./Identifiable";
import { Quantifiable } from "./Quantifiable";

export class Product implements Edible, Identifiable, Quantifiable {

    protected id: number = 0;
    protected name: string = '';
    protected quantity: number = 0;

    protected constructor(name: string, id = 0, quantity = 0) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
    
    public setName(name: string) {
        this.name = name;
    };

    public getQuantity(): number {
        return this.quantity;
    }
    
    public setQuantity(quantity: number) {
        this.quantity = quantity;
    }

    static ProductBuilder = class ProductBuilder {
        private id: number = 0;
        private name: string = '';
        private quantity: number = 0;

        public withId(id: number): ProductBuilder {
            this.id = id;
            return this;
        }
        public withName(name: string): ProductBuilder {
            this.name = name;
            return this;
        }
        public withQuantity(quantity: number): ProductBuilder {
            this.quantity = quantity;
            return this;
        }
        public build(): Product {
            return new Product(this.name, this.id, this.quantity);
        }
    }
}