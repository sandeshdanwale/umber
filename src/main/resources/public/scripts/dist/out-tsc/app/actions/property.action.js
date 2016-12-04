import { type } from '../util';
export var ActionTypes = {
    LOAD_SUCCESS: type('[Property] Load Success'),
    LOAD: type('[Property] Load'),
    COMMAND: type('[Property] Command'),
    UPDATE_PROPERTY_DETAIL: type('[Property] Update Property Detail')
};
export var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());
export var LoadAction = (function () {
    function LoadAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());
export var UpdatePropertyDetail = (function () {
    function UpdatePropertyDetail(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_PROPERTY_DETAIL;
    }
    return UpdatePropertyDetail;
}());
export var CommandAction = (function () {
    function CommandAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.COMMAND;
    }
    return CommandAction;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/property.action.js.map