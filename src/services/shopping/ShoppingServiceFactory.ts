import { ServiceProviderType } from "../../commons/ServiceProviderType";
import { ShoppingMockServiceProvider } from "./ShoppingMockServiceProvider";
import { ShoppingRestServiceProvider } from "./ShoppingRestServiceProvider";
import { ShoppingService } from "./ShoppingService";

export class ShoppingServiceFactory {
    static create(type: ServiceProviderType): ShoppingService {
        let service: ShoppingService;
        if (type === ServiceProviderType.REST_SERVICE) {
            service = ShoppingRestServiceProvider.getInstance();
        } else {
            service = ShoppingMockServiceProvider.getInstance();
        }
        return service;
    }
}