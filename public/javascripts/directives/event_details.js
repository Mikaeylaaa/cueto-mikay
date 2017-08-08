news_app_page.directive('eventDetails', function(){
    return{
        restrict: 'E',
        scope: {
            eventinfos: '='
        },
        templateUrl:'javascripts/directives/eventDetails.html'
    };
});