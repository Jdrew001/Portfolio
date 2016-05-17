app.controller('HomeController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
    $scope.userPicture = "../Portfolio/assets/drew.jpg";
    
    var ref = new Firebase("https://portfolio-dtatkison.firebaseio.com/");
    $scope.data = $firebaseObject(ref);
}]);