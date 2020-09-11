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

function compileProgram(fileName, exePath, send) {
  return new Promise((resolve, reject) => {
    console.log('Compiling...✅');
    exec(`g++ -o ${exePath} ${fileName}`, (error, stdout, stderr) => {
      if (error) {
        reject(send);
      } else {
        console.log(chalk.bgGreen.bold(`Compiled Successfully! 🐣`));
        resolve(send);
      }
    });
  });
}

function runProgram(executable, input, send) {
  return new Promise((resolve, reject) => {
    console.log('Running...💯');
    exec(getRunCommand(executable, input), (error, stdout, stderr) => {
      if (error) {
        reject(send);
      } else {
        console.log(chalk.bgGreen.bold('Run Successful! 🦄') + '\nstdout: ');
        resolve(stdout);
      }
    });
  });
}

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
  await compileProgram(cppPath, exePath, send)
    .then(async () => {
      let com;
      try {
        com = await runProgram(exePath, inputPath);
        send.stdout = com;
      } catch (err) {
        send.stderr = err;
        Error(err);
      }
    })
    .then((d) => {
      deleteFiles(cppPath, inputPath, exePath);
      return d;
    })
    .catch((err) => {
      deleteFiles(cppPath, inputPath, exePath);
      send.stderr = err;
      return err; //Compile fail //run error
    });

  return send;
}

module.exports = { CPP };
