const express = require('express');

const router = express.Router();

router.get('/person', (req, res) => {
  if (req.query) {
    res.json({
      message: 'you requested for query string of ' + JSON.stringify(req.query),
    });
  }
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

// query string

module.exports = router;
