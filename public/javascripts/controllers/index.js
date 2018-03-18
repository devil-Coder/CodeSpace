var app = angular.module("raw", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            template : "There is no page available"
        })
        .otherwise({
            template:"404 - Page not found"
        });
});