var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var db = req.db,
      collection = db.get('ecMicro');
  collection.find({},{},function(e, docs){
    res.render('index', {
      title: 'nodeSite',
      ecData : docs
    });
  });

});

module.exports = router;
