const path = require('path');
const express = require('express');
const api = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use('/api', api);

console.log(
  JSON.stringify({
    ans: `#include <iostream>
using namespace std;
int main() {
    cout<<"Hello World!";
}
`,
  }),
);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
