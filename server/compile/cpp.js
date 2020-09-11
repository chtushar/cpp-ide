const { v4: uuid } = require('uuid');
const chalk = require('chalk');
const { exec } = require('child_process');
const {
  saveFile,
  getRunCommand,
  getExecutablePath,
  getCPPPath,
  getInputPath,
  deleteFiles,
} = require('../Utils/utils');

function compileProgram(cppPath, exePath) {
  return new Promise((resolve, reject) => {
    console.log('Compiling...✅');
    exec(`g++ -o ${exePath} ${cppPath}`, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      } else {
        console.log(chalk.bgGreen.bold(`Compiled Successfully! 🐣`));
        resolve({ stdout, stderr });
      }
    });
  });
}

// function runProgram(executable, input, send) {
//   return new Promise((resolve, reject) => {
//     console.log('Running...💯');
//     exec(getRunCommand(executable, input), (error, stdout, stderr) => {
//       if (error) {
//         reject(send);
//       } else {
//         console.log(chalk.bgGreen.bold('Run Successful! 🦄') + '\nstdout: ');
//         resolve(stdout);
//       }
//     });
//   });
// }

async function CPP(code, input, socket) {
  let send = {
    stdout: null,
    stderr: null,
  };
  let fileName = uuid();
  let exePath = getExecutablePath(fileName);
  let cppPath = getCPPPath(fileName);
  let inputPath = getInputPath(fileName);

  await saveFile(cppPath, code); //save CPP fiḻe
  await saveFile(inputPath, input); //Save input file

  //Compile CPP file
  try {
    await compileProgram(cppPath, exePath);
  } catch (err) {
    console.log(chalk.bgRed.bold('Compilation Error!'));
    send.stderr = err.stderr;
    deleteFiles(cppPath, inputPath, exePath);
    return send;
  }

  //Run CPP File

  deleteFiles(cppPath, inputPath, exePath);
  return send;
}

module.exports = { CPP };
