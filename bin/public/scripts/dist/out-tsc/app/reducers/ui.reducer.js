import * as ui from '../actions/ui.action';
;
var initialState = {
    loaded: false,
    activePanels: null,
    activeSearchDetailPanel: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ui.ActionTypes.LOAD_SUCCESS:
            return {
                loaded: false,
                activePanels: action.payload,
                activeSearchDetailPanel: null
            };
        case ui.ActionTypes.UPDATE_SEARCH_DETAIL:
            return {
                loaded: false,
                activePanels: state.activePanels,
                activeSearchDetailPanel: action.payload
            };
        default:
            return state;
    }
}
;
export function getActivePanels(state$) {
    return state$.select(function (state) { return state.activePanels; });
}
export function getActiveSearchDetailPanel(state$) {
    return state$.select(function (state) { return state.activeSearchDetailPanel; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/ui.reducer.js.map