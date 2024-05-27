const shell = require('shelljs');

function checkNodeVersion() {
  const nodeVersion = shell.exec('node -v', { silent: true }).stdout.trim();
  const versionNumber = nodeVersion.replace(/^v/, '');
  const [major, minor, patch] = versionNumber.split('.').map(Number);
  if (major > 14 || (major === 14 && minor > 15) || (major === 14 && minor === 15 && patch >= 1)) {
    return true;
  }
  return false;
}

function checkNpmVersion() {
  const npmVersion = shell.exec('npm -v', { silent: true }).stdout.trim();
  return npmVersion !== '';
}

function installWebosCli() {
  if (!shell.which('node')) {
    shell.echo('Error: Node.js is not installed.');
    shell.exit(1);
  }

  if (!checkNodeVersion()) {
    shell.echo('Error: Node.js version must be greater than 14.15.1.');
    shell.exit(1);
  }

  if (!shell.which('npm')) {
    shell.echo('Error: npm is not installed.');
    shell.exit(1);
  }

  if (!checkNpmVersion()) {
    shell.echo('Error: Unable to determine npm version.');
    shell.exit(1);
  }

  if (shell.exec('npm install -g @webos-tools/cli').code !== 0) {
    shell.echo('Error: WebOS CLI installation failed');
    shell.exit(1);
  }
  shell.echo('WebOS CLI installed successfully! Run ares -V to confirm installation.');
}

function createWebosProject(projectName) {
  if (!projectName) {
    shell.echo('Error: Project name is required');
    shell.exit(1);
  }
  if (shell.exec(`ares-generate -t basic -p ${projectName}`).code !== 0) {
    shell.echo('Error: WebOS project creation failed');
    shell.exit(1);
  }
}

function initiateTvPairing(deviceName, ip) {
  if (!deviceName || !ip) {
    shell.echo('Error: Device name and IP are required');
    shell.exit(1);
  }
  if (shell.exec(`ares-setup-device --add ${deviceName} --host ${ip}`).code !== 0) {
    shell.echo('Error: TV pairing failed');
    shell.exit(1);
  }
}

function buildWebosIpk(projectDir) {
  if (!projectDir) {
    shell.echo('Error: Project directory is required');
    shell.exit(1);
  }
  if (shell.cd(projectDir).code !== 0) {
    shell.echo('Error: Failed to change directory to project');
    shell.exit(1);
  }
  if (shell.exec('ares-package .').code !== 0) {
    shell.echo('Error: WebOS IPK build failed');
    shell.exit(1);
  }
  shell.echo('WebOS IPK build succeeded');
}

module.exports = {
  installWebosCli,
  createWebosProject,
  initiateTvPairing,
  buildWebosIpk
};
