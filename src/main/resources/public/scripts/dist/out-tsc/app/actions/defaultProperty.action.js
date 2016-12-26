import { type } from '../util';
export var ActionTypes = {
    LOAD_SUCCESS: type('[DefaultProperty] Load Success'),
    LOAD: type('[DefaultProperty] Load'),
    COMMAND: type('[DefaultProperty] Command'),
    UPDATE_PROPERTY_DETAIL: type('[DefaultProperty] Update Property Detail')
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
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/defaultProperty.action.js.map