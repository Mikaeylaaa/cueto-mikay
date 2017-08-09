var app = angular.module('news_project', []);

    app.controller('myNewsCtrl', ['$scope', 'forecast', function($scope, forecast){

        $scope.newsheader = "NEWS";
        $scope.newsContents = [
            {
                cover: "https://twportal.blob.core.windows.net/789newnews/123456789_1498289121819.jpg",
                news_title: "Test News",
                news_subtitle: "Subtitle Test News",
                news_preview_content: "SINGAPORE - Imagine walking into a store and being greeted at the door. You tell your sales assistant what you are looking for and he leads you straight to the correct shelf. You ask for price comparisons and the information is immediately conveyed to you. When you finally decide on what to buy, instead of standing in a long queue, you can make payment with your sales assistant who also knows whether you have a membership with the retailer.All that may seem too good to be true, but it is now possible with a new robot that was launched by Newstead Technologies on Friday (May 26)."
            },

            {
                cover: "https://twportal.blob.core.windows.net/789newnews/123456789_1495785057477.png",
                news_title: "Asia's first retail robot launched to help relieve manpower shortages.",
                news_subtitle: "",
                news_preview_content: "Each robot has the ability to run for about eight hours on a four-hour charge. It will also be able to return to its charging point as often as it needs to, such as when there are no customers to serve. This will help it to run for the duration of a shop's opening hours, which often extends beyond eight hours."
            },

            {
                cover: "https://twportal.blob.core.windows.net/789newnews/123456789_1495526216270.jpg",
                news_title: "Test Case Studies",
                news_subtitle: "",
                news_preview_content: "The Possibilities are Endless, XYZrobot’s first humanoid robot Bolide has 18 smart servos, 18 degree of freedom to mimic precise human movements."
            },
        ]

        $scope.apps = [
            {
                imagelink: 'https://twportal.blob.core.windows.net/789newnews/123456789_1499244870326.jpg',
                title: 'Event Test Data 001',
                author: 'Anonymous 001',
                pubdate: new Date('2015', '07', '16')
            },
            {
                imagelink: 'https://twportal.blob.core.windows.net/789newnews/123456789_1499244945378.jpg',
                title: 'Event Test Data 002',
                author: 'Anonymous 002',
                pubdate: new Date('2016', '05', '29')
            },
            {
                imagelink: 'https://twportal.blob.core.windows.net/789newnews/123456789_1499246007658.jpg',
                title: 'Event Test Data 003',
                author: 'Anonymous 003',
                pubdate: new Date('2017', '08', '08')
            }
        ]

        /*$scope.eventsdetails = [
            {
                title: 'Event Test Data 001',
                author: 'Anonymous 001',
                pubdate: new Date('2015', '07', '16')
            },
            {
                title: 'Event Test Data 002',
                author: 'Anonymous 002',
                pubdate: new Date('2016', '05', '29')
            },
            {
                title: 'Event Test Data 003',
                author: 'Anonymous 003',
                pubdate: new Date('2017', '08', '08')
            },
        ]*/

        forecast.success(function(data){
            $scope.fiveDay = data;
        });


    }]);