import { CityId } from './aggregate.model';
export var City = (function () {
    function City(data) {
        var id = data.id ? data.id.registrationId : data.cityId.registrationId;
        this.id = new CityId(id);
        this.name = data.name;
        this.rank = data.rank;
        this.featured = data.featured;
        this.primary = data.primary;
    }
    return City;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/city.model.js.map