var express = require('express'),
    router = express.Router();

/* GET Index page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'ec-microsite' })
});

/* GET IT page. */
router.get('/it-dev', function(req, res) {
  var db = req.db,
      collection = db.get('ecMicro');
  collection.find({},{},function(e, docs){
    res.render('it-dev', {
      title: 'ec-microsite',
      ecData : docs
    });
  });

});

module.exports = router;
