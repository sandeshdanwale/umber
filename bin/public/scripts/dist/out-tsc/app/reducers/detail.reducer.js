import * as detail from '../actions/detail.action';
;
var initialState = {
    loaded: false,
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case detail.ActionTypes.LOAD_SUCCESS:
            console.log('STORE:umber.detail/DETAIL_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/detail.reducer.js.map