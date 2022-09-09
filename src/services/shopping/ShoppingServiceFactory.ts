import { ServiceProviderType } from "../../commons/ServiceProviderType";
import { ShoppingMockServiceProvider } from "./ShoppingMockServiceProvider";
import { ShoppingRestServiceProvider } from "./ShoppingRestServiceProvider";
import { ShoppingService } from "./ShoppingService";

export class ShoppingServiceFactory {

    /**
     * Create a shopping service provider.
     * 
     * @param type The type of the service to create. Can be a MOCK or a REST_SERVICE.
     * @returns The right instance of the service provider matching with the given type of service.
     */
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