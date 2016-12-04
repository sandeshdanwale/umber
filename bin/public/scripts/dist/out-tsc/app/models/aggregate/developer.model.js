import { DeveloperId, Address } from './aggregate.model';
export var Developer = (function () {
    function Developer(data) {
        this.id = new DeveloperId(data.id);
        this.name = data.name;
        this.description = data.description;
        this.featured = data.featured;
        for (var address in data.addresses) {
            this.addresses.push(new Address(address));
        }
    }
    return Developer;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/developer.model.js.map