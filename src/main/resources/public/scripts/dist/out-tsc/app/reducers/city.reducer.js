import * as city from '../actions/city.action';
;
var initialState = {
    loaded: false,
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case city.ActionTypes.LOAD_SUCCESS:
            console.log('STORE:umber.city/CITY_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        default:
            return state;
    }
}
export function getCityEntities(state$) {
    return state$.select(function (state) { return state.entities; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/city.reducer.js.map