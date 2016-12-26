export var CityId = (function () {
    function CityId(registrationId) {
        this.registrationId = registrationId;
    }
    CityId.prototype.asString = function () {
        return this.registrationId.toString();
    };
    return CityId;
}());
export var LandmarkId = (function () {
    function LandmarkId(registrationId) {
        this.registrationId = registrationId;
    }
    LandmarkId.prototype.asString = function () {
        return this.registrationId.toString();
    };
    return LandmarkId;
}());
export var UserId = (function () {
    function UserId(registrationId) {
        this.registrationId = registrationId;
    }
    UserId.prototype.asString = function () {
        return this.registrationId.toString();
    };
    return UserId;
}());
export var DetailId = (function () {
    function DetailId(registrationId) {
        this.registrationId = registrationId;
    }
    DetailId.prototype.asString = function () {
        return this.registrationId.toString();
    };
    return DetailId;
}());
export var PropertyId = (function () {
    function PropertyId(registrationId) {
        this.registrationId = registrationId;
    }
    PropertyId.prototype.asString = function () {
        return this.registrationId.toString();
    };
    return PropertyId;
}());
export var DeveloperId = (function () {
    function DeveloperId(registrationId) {
        this.registrationId = registrationId;
    }
    DeveloperId.prototype.asString = function () {
        return this.registrationId.toString();
    };
    return DeveloperId;
}());
export var Address = (function () {
    function Address(address) {
        this.line1 = address.line1;
        this.line2 = address.line2;
        this.line3 = address.line3;
        this.city = address.city;
        this.state = address.state;
        this.postalCode = address.postalCode;
        this.country = address.country;
        this.type = address.type;
    }
    return Address;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/aggregate/aggregate.model.js.map