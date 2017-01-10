import { DeveloperId, Address } from './aggregate.model';
import * as _ from 'lodash';
export var Developer = (function () {
    function Developer(data) {
        var _this = this;
        this.id = new DeveloperId(data.id.registrationId);
        this.name = data.name;
        this.description = data.description;
        this.featured = data.featured;
        this.addresses = [];
        _.each(data.addresses, function (address) { return _this.addresses.push(new Address(address)); });
    }
    return Developer;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/developer.model.js.map