const path = require('path');
const express = require('express');
const { CPP } = require('./compile/cpp');
const api = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
