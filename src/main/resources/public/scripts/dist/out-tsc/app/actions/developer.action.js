import { type } from '../util';
export var ActionTypes = {
    LOAD_SUCCESS: type('[Developer] Load Success'),
    LOAD: type('[Developer] Load'),
    UPDATE_DEVELOPER_DETAIL: type('[Developer] Update Developer Detail')
};
export var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());
export var UpdateDeveloperDetail = (function () {
    function UpdateDeveloperDetail(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_DEVELOPER_DETAIL;
    }
    return UpdateDeveloperDetail;
}());
export var LoadAction = (function () {
    function LoadAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/developer.action.js.map