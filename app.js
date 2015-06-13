(function () {
	angular.module("countdownApp", []).controller('CountdownController', function ($scope, $interval) {
		var beachWeekDate = new Date(2015, 06, 5, 16);
		var beachWeekTime = beachWeekDate.getTime() / 1000.0;

		$interval(function () {
			var nowDate = new Date();
			var nowTime = nowDate.getTime() / 1000.0;
			$scope.timeRemaining = beachWeekTime - nowTime;
		}, 1);
	});
})();
