#!/usr/bin/env node

const { installWebosCli, createWebosProject, initiateTvPairing, buildWebosIpk, debugIpkOnEmulator, debugIpkOnTv } = require('../index');
const args = process.argv.slice(2);

switch (args[0]) {
  case 'install-cli':
    installWebosCli();
    break;
  case 'create-project':
    createWebosProject(args[1]);
    break;
  case 'pair-tv':
    initiateTvPairing(args[1], args[2]);
    break;
  case 'build-ipk':
    buildWebosIpk(args[1]);
    break;
  case 'debug-ipk-emulator':
    debugIpkOnEmulator(args[1]);
    break;
  case 'debug-ipk-device':
    debugIpkOnTv(args[1], args[2]);
    break;
  default:
    console.log('Usage: webos-helper <command> [options]');
    console.log('Commands:');
    console.log('  install-cli          Install WebOS CLI');
    console.log('  create-project       Create a new WebOS project');
    console.log('  pair-tv              Pair TV with device name and IP');
    console.log('  build-ipk            Build WebOS IPK file');
    console.log('  debug-ipk-emulator   Debug IPK file on emulator. Usage: webos-helper debug-ipk-emulator <ipk-path>');
    console.log('  debug-ipk-device     Debug IPK file on device. Usage: webos-helper debug-ipk-device <ipk-path> <device-name>');
    break;
}
