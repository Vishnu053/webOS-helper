"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Test the functions
(function test() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Testing installWebosCli');
            (0, index_1.installWebosCli)();
            console.log('Testing createWebosProject');
            (0, index_1.createWebosProject)('TestProject');
            console.log('Testing initiateTvPairing');
            (0, index_1.initiateTvPairing)('TestDevice', '192.168.0.101');
            console.log('Testing buildWebosIpk');
            (0, index_1.buildWebosIpk)('./TestProject');
            console.log('All tests passed successfully');
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Test failed:', error.message);
            }
            else {
                console.error('Test failed:', error);
            }
        }
    });
})();
