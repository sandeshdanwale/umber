import { PropertyId, Address } from './aggregate.model';
import { Configs } from './configs.model';
export var Property = (function () {
    function Property(data) {
        this.id = new PropertyId(data.propertyId);
        this.name = data.name;
        this.description = data.description;
        this.featured = data.featured;
        this.developerName = data.developerName;
        for (var address in data.addresses) {
            this.addresses.push(new Address(address));
        }
        this.configs = new Configs(data.configs);
    }
    return Property;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/property.model.js.map