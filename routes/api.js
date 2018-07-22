var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function (req, res, next) {
  res.json({
    retcode: "000",
    message: null,
    data: {
      username: "赵坤坤",
      title: "君梦无痕"
    }
  });
});

router.get('/list', function (req, res, next) {
  res.json({
    retcode: "000",
    message: null,
    data: {
      username: "赵坤坤",
      title: "君梦无痕"
    }
  });
});

module.exports = router;
