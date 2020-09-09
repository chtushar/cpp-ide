const path = require('path');
const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, '..', 'build')));

let server = app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

const io = socket(server);
io.on('connection', (socket) => {
  console.log(`${socket.id} made an connection!`);
});
