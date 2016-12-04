import { type } from '../util';
export var ActionTypes = {
    LOAD_SUCCESS: type('[Developer] Load Success'),
    LOAD: type('[Developer] Load'),
    COMMAND: type('[Developer] Command')
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
export var CommandAction = (function () {
    function CommandAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.COMMAND;
    }
    return CommandAction;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/developer.action.js.map