var express = require('express');
var router = express.Router();
var topic = require('../lib/topic');
var url = require('url')

router.get('/', function (req, res) {
    topic.home(req, res);
});

router.post('/puttime_process', function (req, res) {
    topic.puttime_process(req, res);
});
router.get('/selecttable', function (req, res) {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    topic.selecttable(req, res, queryData);
});
router.get('/showNupdatetable', function (req, res) {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;

    topic.showNupdatetable(req, res, queryData);
});
router.post('/showtable_process', function (req, res) {
    console.log('show_table_process');
    topic.showtable_process(req, res);
});
router.get('/intervalrecodes', function (req, res) {
    topic.select_interval(req, res);
});
router.get('/showtotalrecodes', function (req, res) {
    topic.showtotalrecodes(req, res);
});
router.get('/todaytable_process', function (req, res) {
    topic.todaytable_process(req, res);
}); 
router.post('/update_process', function(req, res){
    topic.update_process(req, res);
}); 
router.post('/delete_process', function(req, res){
    topic.delete_process(req, res);
});
router.post('/confirm_process', function(req, res){
    topic.confirm_process(req, res);
}) 
router.get('/selectSleepTime',function(req,res){
    var _url = req.url;
    var queryData = url.parse(_url, true).query;

    topic.selectSleepTime(req, res, queryData);
});
router.post('/maketable_process', function(req, res) {
    topic.maketable_process(req, res);
}); 
router.post('/interval_process', function(req, res){
    topic.interval_process(req, res);
}) 
router.get('/showcategory', function(req, res) {
    topic.showcategory(req, res);
});
router.post('/QSadd_process', function(req, res) {
    console.log("QSaddres : ", res.post);
    topic.QSadd_process(req, res);
});
router.get('/category_process', function(req, res){
    var _url = req.url;
    var queryData = url.parse(_url, true).query;

    if (queryData.categoryValue === undefined) {
        res.writeHead(404);
        res.end('Not found');
    }
    else {
        topic.category_process(req, res, queryData.categoryValue);
    }
}); 
  
module.exports = router;