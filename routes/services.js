var express = require('express');
var router = express.Router();

/* GET services listing. */
router.get('/serviceslist', function(req, res) {
    var db = req.db;
    db.collection('serviceslist').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;