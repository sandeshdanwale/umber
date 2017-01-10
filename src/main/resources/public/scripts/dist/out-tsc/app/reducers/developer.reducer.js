import * as developer from '../actions/developer.action';
;
var initialState = {
    loaded: false,
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case developer.ActionTypes.LOAD:
            console.log('STORE:umber.developer/DEVELOPER_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        case developer.ActionTypes.LOAD_SUCCESS:
            console.log('STORE:umber.developer/DEVELOPER_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        default:
            return state;
    }
}
export function getDeveloperEntities(state$) {
    return state$.select(function (state) { return state.entities; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/developer.reducer.js.map