var app = angular.module('raw',["ngRoute"],function($locationProvider){
    $locationProvider.html5Mode(true);
});

app.controller('mainController',['$scope','$http','$location',function ($scope,$http,$location) {
    var baseUrl  = 'rawbackend.herokuapp.com';
    console.log("Loaded auth controller");
    $scope.getLogin = function () {
        $http.post(baseUrl + '/login', $scope.user).then(successCallback, errorCallback);
        function successCallback(response) {
            $scope.regData = response.data;
            switch (parseInt($scope.regData.code)) {
                case 1:
                    $scope.msgReg = "Please verify your email to complete the registration. Check spam if not found.";
                    break;
                case 0:
                    $scope.msgReg = $scope.regData.message;
                    break;
            }
        }

        function errorCallback(error) {
            console.log("Message could not be Obtained !" + error);
        }
    };
}]);

angular.module('raw').directive('loader', loader);

/**
 * Defines loading spinner behaviour
 *
 * @param {obj} $http
 * @returns {{restrict: string, link: Function}}
 */
function loader($http) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.$watch(function () {
                return $http.pendingRequests.length;
            }, function (isLoading) {
                if (isLoading) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            });
        }
    };
}