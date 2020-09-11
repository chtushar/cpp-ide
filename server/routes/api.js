const compiler = require('compile-code');
const express = require('express');
const { CPP } = require('../compile/cpp');
const router = express.Router();
compiler.init();

router.post('/', async (req, res) => {
  let ans = await CPP(req.body.code, req.body.input);
  res.json(ans);
});

module.exports = router;
