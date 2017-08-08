news_app_page.directive('eventNews', function(){
    return{
        restrict: 'E',
        scope: {
            eventinfo: '='
        },
        templateUrl:'javascripts/directives/eventNews.html'
    };
});