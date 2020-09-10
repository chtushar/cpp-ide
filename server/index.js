const path = require('path');
const express = require('express');
const socket = require('socket.io');
const { CPP } = require('./compile/cpp');

let sampleProgram = `#include<bits/stdc++.h>

using namespace std;

int main(){
  int n;
  cin >> n;
  for(int i = 0; i < n; i++){
    cout << i << " ";
  }
  cout << endl;

  return 0;
}`;

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, '..', 'build')));

console.log(CPP(sampleProgram, '5'));

let server = app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log(`${socket.id} made an connection!`);
});
