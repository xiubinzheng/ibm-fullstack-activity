var express = require('express');
var router = express.Router();
var dal = require('../dataAccessLayer');

// a data api
router.get('/example', function (req, res) {
    dal.getExampleItemData()
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            res.status(500).send(result);
        })
});

router.get('/avg', function (req, res) {
    dal.getAverageDaily()
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            res.status(500).send(result);
        })
});


router.get('/all', function (req, res) {
    dal.getTotalValuebyItem()
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            res.status(500).send(result);
        })
});




module.exports = router;