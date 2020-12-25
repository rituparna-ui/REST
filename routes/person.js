const express = require('express');

const router = express.Router();

router.get('/person', (req, res) => {
  res.json({
    message: 'this is the person route',
  });
});



module.exports = router;
