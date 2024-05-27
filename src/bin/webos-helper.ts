#!/usr/bin/env node

import { installWebosCli, createWebosProject, initiateTvPairing, buildWebosIpk } from '../index';

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
  default:
    console.log('Usage: webos-helper <command> [options]');
    console.log('Commands:');
    console.log('  install-cli          Install WebOS CLI');
    console.log('  create-project       Create a new WebOS project');
    console.log('  pair-tv              Pair TV with device name and IP');
    console.log('  build-ipk            Build WebOS IPK file');
    break;
}
