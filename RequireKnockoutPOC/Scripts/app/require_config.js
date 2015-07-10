var require = {
    baseUrl: '/Scripts/app',
    paths: {
        text: '/Scripts/lib/text',
        domReady: '/Scripts/lib/domReady',
        jquery: '/Scripts/lib/jquery-1.10.2',
        knockout: '/Scripts/lib/knockout-3.3.0',
        bootstrap: '/Scripts/lib/bootstrap'
    },
    shim: {
        bootstrap: {
            deps : ['jquery']
        }
    }
};