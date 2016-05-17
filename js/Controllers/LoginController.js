app.controller('LoginController', ['$scope', '$location', function($scope, $location) {
    var ref = new Firebase("https://portfolio-dtatkison.firebaseio.com");
    
    $scope.login = function(user) {
        ref.authWithPassword({
            email: user.email,
            password: user.password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $location.path('/admin').replace();
            }
        });
    };
}]);