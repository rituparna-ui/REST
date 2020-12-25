const express = require('express');

const router = express.Router();

router.get('/person', (req, res) => {
  res.json({
    message: 'this is the person route',
  });
});

//query params

router.get('/person/:name', (req, res) => {
  res.json({
    message: `You requested for ${req.params.name}`,
  });
});

module.exports = router;
