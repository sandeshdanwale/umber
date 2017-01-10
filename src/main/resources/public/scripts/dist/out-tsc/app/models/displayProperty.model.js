export var DisplayProperty = (function () {
    function DisplayProperty(data) {
        if (data) {
            this.address = data.address;
            this.configs = data.configs;
            this.price = data.price;
            this.name = data.name;
            this.description = data.description;
            this.developerName = data.developerName;
        }
    }
    return DisplayProperty;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/models/displayProperty.model.js.map