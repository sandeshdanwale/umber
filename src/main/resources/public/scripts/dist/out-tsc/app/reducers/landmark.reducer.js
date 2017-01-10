import * as landmark from '../actions/landmark.action';
;
var initialState = {
    loaded: false,
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case landmark.ActionTypes.LOAD_SUCCESS:
            console.log('STORE:umber.landmark/LANDMARK_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        default:
            return state;
    }
}
export function getLandmarkEntities(state$) {
    return state$.select(function (state) { return state.entities; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/landmark.reducer.js.map