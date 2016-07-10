require('angular')

var app = angular.module('myApp', []);

app.directive('test', function() {

    var link = function(scope, element, attrs) {
        console.log("Successfully initiated Angular application");
    };


    return {
        restrict: 'EA',
        scope: {
            datasource: '=',
            add: '&',
        },
        link: link
    };
});
