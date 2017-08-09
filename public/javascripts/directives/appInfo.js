app.directive('appInfo', function(){
    return{
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl:'/public/javascripts/directives/appInfo.html'
    };
});