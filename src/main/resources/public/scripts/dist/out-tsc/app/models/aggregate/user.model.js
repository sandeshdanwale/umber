import { UserId } from './aggregate.model';
export var User = (function () {
    function User(data) {
        this.id = new UserId(data.id);
        this.preference = data.preference;
    }
    return User;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/user.model.js.map