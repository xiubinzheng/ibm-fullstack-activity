angular.module('myApp')
    .controller('dashboardCtrl', ['$scope', 'DataService', function ($scope, DataService) {

        $scope.lineChart = {};
        $scope.lineChart.labelX = "Date";
        $scope.lineChart.labelY = "# Items Sold";
        $scope.lineChart.guidelinesX = false;
        $scope.lineChart.guidelinesY = true;
        $scope.lineChart.formatY = "f";
        $scope.lineChart.legend = "bottom";

        DataService.getExampleData().then(function (data) {
            console.log("Data", data.data);
            $scope.lineChart.data = [{
                key: "Sales",
                values: data.data
            }];
        }).catch(function (err) {
            console.error("There was an error");
        });

    }]);


angular.module('myApp')
    .controller('dashboardCtrl2', ['$scope', 'DataService', function ($scope, DataService) {

        $scope.lineChart = {};
        $scope.lineChart.labelX = "Date";
        $scope.lineChart.labelY = "# Items Sold";
        $scope.lineChart.guidelinesX = false;
        $scope.lineChart.guidelinesY = true;
        $scope.lineChart.formatY = "f";
        $scope.lineChart.legend = "bottom";

        DataService.getAverageDaily().then(function (data) {
            console.log("Data", data.data);
            $scope.lineChart.data = [{
                key: "Sales",
                values: data.data
            }];
        }).catch(function (err) {
            console.error("There was an error");
        });

    }]);


angular.module('myApp')
    .controller('dashboardCtrl3', ['$scope', 'DataService', function ($scope, DataService) {
        DataService.getTotalValuebyItem().then(function (data) {

            $scope.val1 = data.data[0].values;
            $scope.val2 = data.data[1].values;


        }).catch(function (err) {
            console.error("There was an error");
        });
    }]);