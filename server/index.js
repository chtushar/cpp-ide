const path = require('path');
const express = require('express');
const socket = require('socket.io');
const { CPP } = require('./compile/cpp');

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', (req, res) => {
  res.redirect('/');
});

let server = app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

const io = socket(server);

// let sampleCode = `#include <iostream>
// using namespace std;
// int main() {
//     cout<<"Hello World!";
// }`;

// async function ans() {
//   console.log(await CPP(sampleCode, ''));
// }

// ans();

io.on('connection', (socket) => {
  console.log(`${socket.id} made an connection!`);
  socket.on('run', async ({ code, input }) => {
    let ans = await CPP(code, input);
    socket.emit('ans', { ans });
  });
});
