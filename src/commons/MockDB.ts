import { Activity } from "../entities/Activity";
import { FamillyMember } from "../entities/FamillyMember";
import { Product } from "../entities/Product";

export class MockDB {
    public static CART: Array<Product> = new Array();
    public static EDIBLE: Array<Product> = new Array();
    public static FAMILLY: Array<FamillyMember> = new Array();
    public static EVENTS: Array<Activity> = new Array();
}