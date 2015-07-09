define(['knockout', 'domReady!'], function(ko) {
    var model = function () {
        this.tab = ko.observable('tab1');
    };

    console.log("applying main model");
    console.log($);
    ko.applyBindings(new model());
});