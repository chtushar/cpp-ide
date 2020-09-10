const { exec } = require('child_process');
const fs = require('fs');
const os = require('os');
const { saveFile } = require('../Utils/utils');

function compileProgram(fileName) {
  return new Promise((resolve, reject) => {
    console.log('Compiling...');
    exec(
      `g++ -o junk/${fileName}ex junk/${fileName}.cpp`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          console.log(`Compiled Successfully!`);
          resolve([`junk/${fileName}ex`]);
        }
      },
    );
  });
}

function runProgram(executable, input) {
  return new Promise((resolve, reject) => {
    console.log('Running...');
    exec(`./${executable} < ${input}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        console.log('Run Successfully!');
        resolve(stdout);
      }
    });
  });
}

async function CPP(code, input) {
  let message = {
    data: null,
  };

  let fileName = 'tushar';

  await saveFile(`junk/${fileName}.cpp`, code)
    .then(async (codeFile) => {
      let inputFile = await saveFile(`junk/${fileName}-input.txt`, input);
      return [...codeFile, ...inputFile];
    })
    .then(async (p) => {
      let exeFile = await compileProgram(fileName);
      return [...p, ...exeFile];
    })
    .then(async (p) => {
      message.data = await runProgram(p[2], p[1]);
      console.log(message.data);
      return p;
    })
    .then((p) => {
      fs.unlinkSync(p[0]);
      fs.unlinkSync(p[1]);
      fs.unlinkSync(p[2]);
    })
    .catch((err) => {
      console.log(err);
    });

  return message;
}

module.exports = { CPP };
