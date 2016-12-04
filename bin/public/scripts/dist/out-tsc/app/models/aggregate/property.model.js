import { PropertyId, Address } from './aggregate.model';
export var Property = (function () {
    function Property(data) {
        this.id = new PropertyId(data.id);
        this.name = data.name;
        this.description = data.description;
        this.featured = data.featured;
        for (var address in data.addresses) {
            this.addresses.push(new Address(address));
        }
    }
    return Property;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/property.model.js.map