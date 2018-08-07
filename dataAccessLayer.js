var Q = require('q');
var fs = require("fs");
var csv = require('csv');
var alasql = require('alasql');
var values = [];

var getExampleItemData = function () {
    var deferred = Q.defer();
    var readfile = fs.createReadStream('data/data.csv');

    var parser = csv.parse({
        columns: true
    });
    parser.on('readable', function () {
        while (record = parser.read()) {
            values.push(record);
        }
    });

    parser.on('error', function (err) {
        console.log(err.message);
    });

    parser.on('finish', (function () {
        console.log("OK");
    }));

    readfile.pipe(parser);
    alasql(['SELECT date as key, sum([count]) as [values] FROM csv("./data/data") GROUP BY date '])
        .then(function (res) {
            console.log(res[0]);
            deferred.resolve(res[0]);
        }).catch(function (err) {
            console.log('Does the file exist? There was an error:', err);
        });

    return deferred.promise;
}

var getAverageDaily = function () {
    var deferred = Q.defer();

    alasql(['SELECT date as key, avg([count]) as [values] FROM csv("./data/data") GROUP BY date '])
        .then(function (res) {
            console.log(res[0]);
            deferred.resolve(res[0]);
        }).catch(function (err) {
            console.log('Does the file exist? There was an error:', err);
        });

    return deferred.promise;
}

/*
3) Total daily item sales, split into a line for each pudding item (Dani, Milki etc)

*/


var getTotalValuebyItem = function () {
    var deferred = Q.defer();

    alasql(['SELECT sum([count]) as [values] FROM csv("./data/data") GROUP BY item '])
        .then(function (res) {
            console.log('fucking faggot ass nigger, ', res[0]);
            deferred.resolve(res[0]);
        }).catch(function (err) {
            console.log('Does the file exist? There was an error:', err);
        });

    return deferred.promise;
}





module.exports = {
    // export methods here
    getExampleItemData: getExampleItemData,
    getAverageDaily: getAverageDaily,
    getTotalValuebyItem: getTotalValuebyItem
};