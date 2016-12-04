import * as ui from '../actions/ui.action';
;
var initialState = {
    loaded: false,
    activePanels: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ui.ActionTypes.LOAD_SUCCESS:
            return {
                loaded: false,
                activePanels: action.payload
            }; //state; //_.merge({}, state, { loaded : true });
        default:
            return state;
    }
}
;
export function getActivePanels(state$) {
    return state$.select(function (state) { return state.activePanels; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/ui.reducer.js.map