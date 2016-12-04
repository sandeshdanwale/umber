import { LocationId } from './aggregate.model';
export var Location = (function () {
    function Location(data) {
        this.id = new LocationId(data.id);
        this.name = data.name;
        this.rank = data.rank;
        this.featured = data.featured;
    }
    return Location;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/location.model.js.map