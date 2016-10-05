(function(){

	  
var app = angular.module('rides', []);
  
app.directive('rideName',function(){
	return{
	restrict: 'E',
	templateUrl: 'ride-name.html'
	};
});

app.directive('rideNameheader',function(){
	return{
	restrict: 'E',
	templateUrl: 'ride-nameheader.html'
	};
});

app.directive('ridePark',function(){
	return{
	restrict: 'E',
	templateUrl: 'ride-park.html'
	};
});

app.directive('rideParkheader',function(){
	return{
	restrict: 'E',
	templateUrl: 'ride-parkheader.html'
	};
});

})();