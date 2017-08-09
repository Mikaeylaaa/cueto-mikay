var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '/public/views/home.html'
        })
        .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: '/public/views/photo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});