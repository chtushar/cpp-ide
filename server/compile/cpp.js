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

function compileProgram(fileName, exePath) {
  return new Promise((resolve, reject) => {
    console.log('Compiling...✅');
    exec(`g++ -o ${exePath} ${fileName}`, (error, stdout, stderr) => {
      if (error) {
        reject(Error(error));
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
        resolve(stdout);
      }
    });
  });
}

async function CPP(code, input, socket) {
  let fileName = uuid();
  let exePath = getExecutablePath(fileName);
  let cppPath = getCPPPath(fileName);
  let inputPath = getInputPath(fileName);

  await saveFile(cppPath, code); //save CPP fiḻe
  await saveFile(inputPath, input); //Save input file

  //Compile CPP file
  return await compileProgram(cppPath, exePath)
    .then(async () => {
      let com;
      try {
        com = await runProgram(exePath, inputPath);
      } catch (err) {
        Error(err);
      }
      return com;
    })
    .then((d) => {
      deleteFiles(cppPath, inputPath, exePath);
      return d;
    })
    .catch((err) => {
      deleteFiles(cppPath, inputPath, exePath);
      return err; //Compile fail //run error
    });
}

module.exports = { CPP };
