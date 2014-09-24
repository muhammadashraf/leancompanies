'use strict';

/* Controllers */

function LeanCompanyListCtrl($scope, $http) {
  
  $http.get('/leancompanies').success(function(data) {
    $scope.leancompanies = data;
  });

  $scope.addLeanCompany = function() {
      var newleancompany = { "companyname": $scope.companynametext, "city": $scope.citytext, "state": $scope.statetext, "zip": $scope.zip };

  	 $http({
  	     url: '/addleancompany',
        method: "POST",
        data: JSON.stringify(newleancompany),
        headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
             $scope.leancompanies.push(newleancompany);
             $scope.companynametext = '';
             $scope.citytext = '';
             $scope.statetext = '';
             $scope.zip = '';
      }).error(function (data, status, headers, config) {
            
      });
  };
};

angular.module('companiesApp', []).controller('LeanCompanyListCtrl', ['$scope', '$http', LeanCompanyListCtrl]);
