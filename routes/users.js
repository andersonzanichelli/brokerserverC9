var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({'status': 'online'});
});

router.get('/:email', function(req, res) {
    if(req.query.email === 'anderzanic@gmail.com') {
        res.send({'status': true});
    } else {
        res.send({'status': false});
    }
});

module.exports = router;
