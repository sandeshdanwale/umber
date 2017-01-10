import { type } from '../util';
export var ActionTypes = {
    LOAD_SUCCESS: type('[Landmark] Load Success'),
    LOAD: type('[Landmark] Load'),
    UPDATE_LANDAMRK_DETAIL: type('[Landmark] Update Landmark Detail')
};
export var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());
export var UpdateLandmarkDetail = (function () {
    function UpdateLandmarkDetail(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_LANDAMRK_DETAIL;
    }
    return UpdateLandmarkDetail;
}());
export var LoadAction = (function () {
    function LoadAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/landmark.action.js.map