const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const personRoute = require('./routes/person');

app.use(personRoute);

app.listen(PORT, () => {
  console.log(`App serving on port ${PORT}`);
});
