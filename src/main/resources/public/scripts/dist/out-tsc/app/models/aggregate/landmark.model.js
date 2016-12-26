import { LandmarkId } from './aggregate.model';
export var Landmark = (function () {
    function Landmark(data) {
        this.id = new LandmarkId(data.id || data.landmarkId.registrationId);
        this.name = data.name;
        this.rank = data.rank;
        this.featured = data.featured;
    }
    return Landmark;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/landmark.model.js.map