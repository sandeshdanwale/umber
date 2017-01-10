import * as ui from '../actions/ui.action';
;
var initialState = {
    loaded: false,
    activePanels: null,
    searchDetailListLoader: false,
    activeSearchDetailPanel: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ui.ActionTypes.LOAD_SUCCESS:
            return {
                loaded: true,
                activePanels: action.payload,
                searchDetailListLoader: false,
                activeSearchDetailPanel: null
            };
        case ui.ActionTypes.UPDATE_SEARCH_DETAIL:
            return {
                loaded: true,
                activePanels: state.activePanels,
                searchDetailListLoader: false,
                activeSearchDetailPanel: action.payload
            };
        case ui.ActionTypes.SHOW_SEARCH_DETAIL_LIST_LOADER:
            return {
                loaded: true,
                activePanels: state.activePanels,
                searchDetailListLoader: action.payload,
                activeSearchDetailPanel: state.activeSearchDetailPanel
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
export function getSearchDetailListLoader(state$) {
    return state$.select(function (state) { return state.searchDetailListLoader; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/ui.reducer.js.map