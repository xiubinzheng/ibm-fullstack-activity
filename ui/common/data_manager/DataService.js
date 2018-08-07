myApp.factory('DataService', ['$http', function ($http) {

    // App configurations
    var getExampleData = function () {
        return $http.get("/api/example", null);
    };

    var getAverageDaily = function () {
        return $http.get("/api/avg", null);
    };

    var getTotalValuebyItem = function () {
        return $http.get("/api/all", null);
    };

    return {
        // app and them configurations
        getExampleData: getExampleData,
        getAverageDaily: getAverageDaily,
        getTotalValuebyItem: getTotalValuebyItem
    };
}]);