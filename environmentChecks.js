const { exec } = require('child_process');

function checkNodeVersion(requiredVersion) {
  exec('node -v', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error checking Node.js version: ${error}`);
      return;
    }
    const installedVersion = stdout.trim();
    if (installedVersion < requiredVersion) {
      console.log(`Node.js version is too low. Required: ${requiredVersion}, Installed: ${installedVersion}`);
    } else {
      console.log(`Node.js version is adequate: ${installedVersion}`);
    }
  });
}

function checkNpmVersion(requiredVersion) {
  exec('npm -v', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error checking npm version: ${error}`);
      return;
    }
    const installedVersion = stdout.trim();
    if (installedVersion < requiredVersion) {
      console.log(`npm version is too low. Required: ${requiredVersion}, Installed: ${installedVersion}`);
    } else {
      console.log(`npm version is adequate: ${installedVersion}`);
    }
  });
}

module.exports = { checkNodeVersion, checkNpmVersion };
