import * as user from '../actions/user.action';
;
var initialState = {
    loaded: false,
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case user.ActionTypes.LOAD_SUCCESS:
            console.log('STORE:umber.user/USER_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        default:
            return state;
    }
}
export function getUserEntities(state$) {
    return state$.select(function (state) { return state.entities; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/user.reducer.js.map