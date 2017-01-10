import { PropertyId, Address } from './aggregate.model';
import { Configs } from './configs.model';
import * as _ from 'lodash';
export var Property = (function () {
    function Property(data) {
        var _this = this;
        this.id = new PropertyId(data.id.registrationId);
        this.name = data.name;
        this.description = data.description;
        this.featured = data.featured;
        this.developerName = data.developerName;
        this.cityName = data.cityName;
        this.addresses = [];
        _.each(data.addresses, function (address) { return _this.addresses.push(new Address(address)); });
        this.configs = data.configs ? new Configs(data.configs) : null;
    }
    return Property;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/property.model.js.map