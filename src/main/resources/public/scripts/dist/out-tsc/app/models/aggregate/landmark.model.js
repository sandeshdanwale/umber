import { LandmarkId } from './aggregate.model';
export var Landmark = (function () {
    function Landmark(data) {
        var id = data.id ? data.id.registrationId : data.landmarkId.registrationId;
        this.id = new LandmarkId(id);
        this.name = data.name;
        this.rank = data.rank;
        this.featured = data.featured;
    }
    return Landmark;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/landmark.model.js.map