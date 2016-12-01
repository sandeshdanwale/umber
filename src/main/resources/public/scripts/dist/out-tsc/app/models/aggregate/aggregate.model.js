export var LocationId = (function () {
    function LocationId(id) {
        this.identifier = id;
    }
    LocationId.prototype.asString = function () {
        return this.identifier.toString();
    };
    return LocationId;
}());
export var DetailId = (function () {
    function DetailId(id) {
        this.identifier = id;
    }
    DetailId.prototype.asString = function () {
        return this.identifier.toString();
    };
    return DetailId;
}());
export var PropertyId = (function () {
    function PropertyId(id) {
        this.identifier = id;
    }
    PropertyId.prototype.asString = function () {
        return this.identifier.toString();
    };
    return PropertyId;
}());
export var DeveloperId = (function () {
    function DeveloperId(id) {
        this.identifier = id;
    }
    DeveloperId.prototype.asString = function () {
        return this.identifier.toString();
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