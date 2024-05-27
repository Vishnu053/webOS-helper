#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const args = process.argv.slice(2);
switch (args[0]) {
    case 'install-cli':
        (0, index_1.installWebosCli)();
        break;
    case 'create-project':
        (0, index_1.createWebosProject)(args[1]);
        break;
    case 'pair-tv':
        (0, index_1.initiateTvPairing)(args[1], args[2]);
        break;
    case 'build-ipk':
        (0, index_1.buildWebosIpk)(args[1]);
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
