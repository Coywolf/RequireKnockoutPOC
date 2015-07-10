define(['knockout', 'text!./listbutton.html'], function (ko, htmlString) {
    function viewModel(params) {
        var self = this;

        var init = params ? Array.apply(null, { length: params.init }).map(Number.call, Number) : [];
        self.items = ko.observableArray(init);

        self.addItem = function() {
            self.items.push(self.items().length);
        }
    }

    return {
        viewModel: viewModel,
        template: htmlString
    }
})