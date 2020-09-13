const express = require('express');
const { CPP } = require('../compile/cpp');
const router = express.Router();

router.post('/', async (req, res) => {
  let ans = await CPP(req.body.code, req.body.input);
  res.json(ans);
});

module.exports = router;
