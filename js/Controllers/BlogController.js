app.controller('BlogController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var ref = new Firebase("https://portfolio-dtatkison.firebaseio.com/Post");
    $scope.posts = $firebaseArray(ref);

    $scope.posts.$loaded()
        .then(function() {
            console.log($scope.posts);
        })
        .catch(function(err) {
            console.error(err);
        });

}]);