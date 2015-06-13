(function () {
	angular.module("countdownApp", []).controller('CountdownController', function ($scope, $interval) {
		var beachWeekDate = new Date(2015, 06, 5, 16);
		var beachWeekTime = beachWeekDate.getTime();

		$interval(function () {
			var nowDate = new Date();
			var nowTime = nowDate.getTime();
			var timeRemaining = beachWeekTime - nowTime;

			var seconds = $scope.seconds = timeRemaining / 1000;
			var minutes = $scope.minutes = seconds / 60;
			var hours = $scope.hours = minutes / 60;
			var days = $scope.days = hours / 24;
			var weeks = $scope.weeks = days / 7;
		}, 1);
	});
})();
