import * as tag from '../actions/tag.action';
import * as _ from 'lodash';
;
var initialState = {
    entities: null
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case tag.ActionTypes.ADD_TAG:
            console.log('STORE:umber.tag/ADD_TAG');
            return {
                entities: _.slice(_.uniq(_.union(state.entities, [action.payload])), 0, 3)
            };
        case tag.ActionTypes.REMOVE_TAG:
            console.log('STORE:umber.tag/REMOVE_TAG');
            return {
                entities: _.filter(state.entities, function (e) { return !(e.type === action.payload.type && e.name === action.payload.name); })
            };
        default:
            return state;
    }
}
export function getTagEntities(state$) {
    return state$.select(function (state) { return state.entities; });
}
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/reducers/tag.reducer.js.map