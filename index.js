const path = require('path');
const express = require('express');
var cors = require('cors');
const api = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5555;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
