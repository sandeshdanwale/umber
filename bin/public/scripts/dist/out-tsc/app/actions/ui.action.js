import { type } from '../util';
export var ActionTypes = {
    LOAD_SUCCESS: type('[Ui] Load Success'),
    LOAD: type('[Ui] Load'),
    COMMAND: type('[Ui] Command'),
    PANEL: type('[UI] Panel'),
    UPDATE_SEARCH_DETAIL: type('[UI] Update Search Detail')
};
export var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());
export var UpdateSearchDetail = (function () {
    function UpdateSearchDetail(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_SEARCH_DETAIL;
    }
    return UpdateSearchDetail;
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
export var PanelAction = (function () {
    function PanelAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.PANEL;
    }
    return PanelAction;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/ui.action.js.map