define(['jquery', 'knockout'], function ($, ko) {
    // component registration
    console.log("registering components");
    console.log($);
    console.log(ko);

    $.noConflict(); // this removes window.$, which means all modules would have to require jquery like this one does

    ko.components.register('tab1', { require: 'components/tab1/tab1' });
    ko.components.register('tab2', { require: 'components/tab2/tab2' });
});