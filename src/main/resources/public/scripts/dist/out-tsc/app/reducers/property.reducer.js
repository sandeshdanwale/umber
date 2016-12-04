import * as property from '../actions/property.action';
import * as _ from 'lodash';
;
var initialState = {
    loaded: false,
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case property.ActionTypes.LOAD_SUCCESS:
            console.log('STORE:umber.property/PROPERTY_LOADED');
            return {
                loaded: true,
                entities: action.payload
            };
        case property.ActionTypes.UPDATE_PROPERTY_DETAIL:
            console.log('STORE:umber.property/UPDATE_PROPERTY_DETAIL');
            return {
                loaded: true,
                entities: _.differenceBy(state.entities, action.payload, function (p) { return p.id.registrationId; }).concat(action.payload)
            };
        default:
            return state;
    }
}
export function getPropertyEntities(state$) {
    return state$.select(function (state) { return state.entities; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/property.reducer.js.map