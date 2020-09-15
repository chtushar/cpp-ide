const chalk = require('chalk');
const fs = require('fs');
const os = require('os');
const path = require('path');

const saveFile = (file, data) => {
  return new Promise((resolve, reject) => {
    console.log('Generating file...');
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(`File generated with name ${file}`);
        resolve([file]);
      }
    });
  });
};

function deleteFiles(cppPath, inputPath, exePath) {
  if (fs.existsSync(cppPath)) {
    console.log(chalk.bgBlueBright.bold('Cpp file deleted successfully!'));
    fs.unlinkSync(cppPath);
  }

  if (fs.existsSync(inputPath)) {
    console.log(chalk.bgBlueBright.bold('Input file deleted successfully!'));
    fs.unlinkSync(inputPath);
  }

  if (fs.existsSync(exePath)) {
    console.log(
      chalk.bgBlueBright.bold('Executable file deleted successfully!'),
    );
    fs.unlinkSync(exePath);
  }
}

function getRunCommand(executable, input) {
  return `${executable} < ${input}`;
}

function getExecutablePath(fileName) {
  console.log(os.platform());
  if (os.platform() === 'win32') {
    return `${path.join(__dirname, '..', 'junk', fileName)}.exe`;
  }
  if (os.platform() === 'linux') {
    return `${path.join(__dirname, '..', 'junk', fileName)}`;
  }
}

function getCPPPath(fileName) {
  return `${path.join(__dirname, '..', 'junk', fileName)}.cpp`;
}

function getInputPath(fileName) {
  return `${path.join(__dirname, '..', 'junk', fileName)}-input.txt`;
}

module.exports = {
  saveFile,
  getRunCommand,
  getExecutablePath,
  getCPPPath,
  getInputPath,
  deleteFiles,
};
