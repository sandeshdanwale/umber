import { type } from '../util';
export var ActionTypes = {
    ADD_TAG: type('[Tag] Add Tag'),
    REMOVE_TAG: type('[Tag] Remove Tag')
};
export var AddTagAction = (function () {
    function AddTagAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_TAG;
    }
    return AddTagAction;
}());
export var RemoveTagAction = (function () {
    function RemoveTagAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_TAG;
    }
    return RemoveTagAction;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/actions/tag.action.js.map