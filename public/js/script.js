var myApp = angular.module('myApp',[]);

myApp.controller('registerController',['$scope',function($scope){
    $scope.registerSubmit = function(){
      //  console.log("testing register");
       //alert("testing register");
    }

}]);
myApp.controller('dashboardController',['$scope','$http',function($scope,$http){
   // $http.defaults.headers.post["Content-Type"] = //"application/x-www-form-urlencoded";
   $scope.tasks = {};

 $http.get('/gettasks')
    .then(function(res){
          $scope.tasks =res.data;
    });

    $scope.addTodoList = function(){
            if($scope.addtask){
        $http.post('/addtask',{task:$scope.addtask})
            .then(function(result){
                $scope.tasks = result.data;
                console.log(result);
                $scope.addtask = '';

                //$window.location.href = '/register';

            },
            function(response){
                console.log("error from aj");
                console.log(response);
            }
        );
}

        // $http.get('/register').then(function(response){
        //         console.log("This is working");
        //         console.log(response.data);
        //          $window.location.href = response.data;
        // }, function(){
        //     console.log("This is Error");
        // });


// $http({
//   method: 'POST',
//   url: '/addtask',
//   //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//   //transformRequest: this._transformRequest,
//   data: {task:$scope.addtask}
// }).then(
//   function (response) {
//     var data = response.data;
//     console.log("success from aj");
//     console.log(response.data);
//     // not relevant
//   }, function (error) {
//     var data = error.data;
//     // not relevant
//     console.log("error from aj");
//     console.log(response.data);
//   });






    }

}]);