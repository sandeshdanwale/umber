import { LocationId } from './aggregate.model';
export var Detail = (function () {
    function Detail(data) {
        this.id = new LocationId(data.id);
    }
    return Detail;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/detail.model.js.map