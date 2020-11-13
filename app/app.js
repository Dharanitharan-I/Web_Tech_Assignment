var myApp = angular.module('myApp',[]);
//*Inheritance*//
myApp.controller('AppController',function($scope){
    $scope.message = "Kindly visit after some time!!!";
})

//*Filters*//
myApp.controller('DateController', function($scope) {
    $scope.today = new Date();
});

//*controllers*//
myApp.controller('MsgController',function($scope){
    $scope.error = "No activities due to lockdown";
});

//*Ng-repeat*//
myApp.controller("List1Controller", function($scope) {

   $scope.names1 = ["Bangalore","Kochin","Hyderabad"];

 });



 myApp.controller("List2Controller", function($scope) {

    $scope.names2 = ["Goa","Kochin","Jaipur"];

  });



  myApp.controller("List3Controller", function($scope) {

     $scope.names3 = ["Bangalore","Haridwar","Vishakapatnam"];

   });


   myApp.controller("List5Controller", function($scope) {

      $scope.names5 = ["Bangalore","Trivandrum","Hyderabad"];

    });

    myApp.controller("List4Controller", function($scope) {

       $scope.names4 = ["Delhi","Trivandrum","Vishakapatnam"];

     });
//*Service*//
     myApp.controller('wrkCtrl', function($scope, $Math){
       $scope.tot = $Math.add(40,28);
     });
     myApp.service('$Math',function() {

      this.add =  function (a,b) {
        return(a+b);
      };
     });

//*Factory*//

     myApp.controller('TotCtrl', function($scope, $Work){
       $scope.tot = $Work.add(18,12);
     });

     myApp.factory('$Work',function() {
      var workers = {};
      workers.add =  function (a,b) {
        return(a+b);
      };
      return workers;
     });
//*Directive*//
     myApp.directive('myDirective',function(){
       return{
         template: "Service currently unavailable"
       }
    } );

//*Event Controller*//
    myApp.controller('EvtCtrl', function($scope) {
  $scope.showMe = false;
  $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
  }
});
