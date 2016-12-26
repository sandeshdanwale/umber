import { CityId } from './aggregate.model';
export var City = (function () {
    function City(data) {
        this.id = new CityId(data.id || data.cityId.registrationId);
        this.name = data.name;
        this.rank = data.rank;
        this.featured = data.featured;
    }
    return City;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/city.model.js.map