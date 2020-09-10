const chalk = require('chalk');
const { exec, execFile } = require('child_process');
const fs = require('fs');
const os = require('os');
const {
  saveFile,
  getRunCommand,
  getExecutablePath,
  getCPPPath,
  getInputPath,
} = require('../Utils/utils');

function compileProgram(fileName, exePath) {
  return new Promise((resolve, reject) => {
    console.log('Compiling...✅');
    exec(`g++ -o ${exePath} ${fileName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        console.log(chalk.bgGreen.bold(`Compiled Successfully! 🐣`));
        resolve();
      }
    });
  });
}

function runProgram(executable, input) {
  return new Promise((resolve, reject) => {
    console.log('Running...💯');
    exec(getRunCommand(executable, input), (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        console.log(chalk.bgGreen.bold('Run Successful! 🦄') + '\nstdout: ');
        console.log(stdout);
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
  let exePath = getExecutablePath(fileName);
  let cppPath = getCPPPath(fileName);
  let inputPath = getInputPath(fileName);

  await saveFile(cppPath, code)
    .then(saveFile(inputPath, input))
    .then(async () => {
      await compileProgram(cppPath, exePath);
    })
    .then(async () => {
      await runProgram(exePath, inputPath);
    })
    .then((p) => {
      console.log(chalk.bgBlueBright.bold('Cpp file deleted successfully!'));
      fs.unlinkSync(cppPath);
      console.log(chalk.bgBlueBright.bold('Input file deleted successfully!'));
      fs.unlinkSync(inputPath);
      console.log(
        chalk.bgBlueBright.bold('Executable file deleted successfully!'),
      );
      fs.unlinkSync(exePath);
    })
    .catch((err) => {
      console.log(err);
    });

  return message;
}

module.exports = { CPP };