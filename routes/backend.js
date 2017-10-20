express = require('express');
router = express.Router();
mongojs = require('mongojs');
db = mongojs("mongodb://eman:quarks@127.0.0.1:27017/microndr_v3", ['project_request']);


router.get('/project_request', function(req, res, next) {
    db.project_request.find({}).limit(0, function(error, result){
        if (error){
            res.send(error);
        }else{
            console.log("here");
            res.json(result);
        }
    });
});

module.exports = router;