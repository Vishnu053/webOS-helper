import { installWebosCli, createWebosProject, initiateTvPairing, buildWebosIpk } from './index';

// Test the functions
(async function test() {
  try {
    console.log('Testing installWebosCli');
    installWebosCli();
    console.log('Testing createWebosProject');
    createWebosProject('TestProject');
    console.log('Testing initiateTvPairing');
    initiateTvPairing('TestDevice', '192.168.0.101');
    console.log('Testing buildWebosIpk');
    buildWebosIpk('./TestProject');
    console.log('All tests passed successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Test failed:', error.message);
    } else {
      console.error('Test failed:', error);
    }
  }
})();
