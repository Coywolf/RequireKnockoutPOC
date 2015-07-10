define(['jquery', 'knockout', 'text!./tab1.html', 'bootstrap'], function ($, ko, htmlString) {
    function tab1ViewModel(params) {
        var self = this;

        self.afterRender = function (elements) {
            var tooltipSelector = "[data-toggle='tooltip']";
            $(elements).find(tooltipSelector).addBack(tooltipSelector).tooltip();
        }
    }

    return {
        viewModel: tab1ViewModel,
        template: htmlString
    }
});