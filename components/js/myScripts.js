var app = angular.module('hotel-website', []);
    app.controller("HotelController", function($scope, $http){

    var url = "../components/json/data.json";

                $http.get(url)
                    .then(function (response) {
                        $scope.Hotels = response.data[1].entries;                
                        $scope.Rooms = response.data[0].roomtypes;

                        var cities = [];
                        var prices = [];
                        for (var i in $scope.Hotels) {
                            prices.push($scope.Hotels[i].price);  
                            cities.push($scope.Hotels[i].city);                         
                        }

                        $scope.max = Math.max(...prices);
                        $scope.rangemax = $scope.max;
                        $scope.sortColumn = "price";
                     
                    });
           

                   
                $scope.filterPrice = function (obj) {
                return obj.price > 0 && obj.price <= $scope.max;
            };


    });
