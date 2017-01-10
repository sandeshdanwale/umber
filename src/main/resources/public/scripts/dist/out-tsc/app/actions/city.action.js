import { type } from '../util';
export var ActionTypes = {
    LOAD_SUCCESS: type('[City] Load Success'),
    LOAD: type('[City] Load'),
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
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/city.action.js.map