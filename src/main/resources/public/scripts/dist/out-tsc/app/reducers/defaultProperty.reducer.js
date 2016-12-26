import * as defaultProperty from '../actions/defaultProperty.action';
import * as _ from 'lodash';
;
var initialState = {
    loaded: false,
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case defaultProperty.ActionTypes.LOAD_SUCCESS:
            console.log('STORE:umber.defaultProperty/DEFAULT_PROPERTY_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        case defaultProperty.ActionTypes.UPDATE_PROPERTY_DETAIL:
            console.log('STORE:umber.defaultProperty/UPDATE_PROPERTY_DETAIL');
            return {
                loaded: true,
                entities: _.differenceBy(state.entities, [action.payload], function (p) { return p.id.registrationId; }).concat(action.payload)
            };
        default:
            return state;
    }
}
export function getDefaultPropertyEntities(state$) {
    return state$.select(function (state) { return state.entities; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/defaultProperty.reducer.js.map