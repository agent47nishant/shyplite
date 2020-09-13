var express = require('express');
var router = express.Router();

const testController = require('../controllers/testcontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/q1', testController.q1);
router.get('/q2/:num', testController.q2);
router.get('/q3', testController.q3);
router.get('/q4', testController.q4);
router.get('/q5', testController.q5);


module.exports = router;
