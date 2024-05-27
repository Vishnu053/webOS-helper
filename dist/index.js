"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWebosIpk = exports.initiateTvPairing = exports.createWebosProject = exports.installWebosCli = void 0;
const shell = __importStar(require("shelljs"));
function checkNodeVersion() {
    const nodeVersion = shell.exec('node -v', { silent: true }).stdout.trim();
    const versionNumber = nodeVersion.replace(/^v/, '');
    const [major, minor, patch] = versionNumber.split('.').map(Number);
    return major > 14 || (major === 14 && minor > 15) || (major === 14 && minor === 15 && patch >= 1);
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
    shell.echo('WebOS CLI installed successfully');
}
exports.installWebosCli = installWebosCli;
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
exports.createWebosProject = createWebosProject;
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
exports.initiateTvPairing = initiateTvPairing;
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
exports.buildWebosIpk = buildWebosIpk;
