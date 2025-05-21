const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        /* CSS library import fix in test context. See:
        https://github.com/salesforce/sfdx-lwc-jest/issues/288) */
        '^c/cssLibrary$':
            '<rootDir>/force-app/main/default/lwc/cssLibrary/cssLibrary.css',
        // Jest mocks
        '^@salesforce/apex$': '<rootDir>/force-app/test/jest-mocks/apex',
        '^@salesforce/schema$': '<rootDir>/force-app/test/jest-mocks/schema',
        '^lightning/navigation$':
            '<rootDir>/force-app/test/jest-mocks/lightning/navigation',
        '^lightning/platformShowToastEvent$':
            '<rootDir>/force-app/test/jest-mocks/lightning/platformShowToastEvent',
        '^lightning/uiRecordApi$':
            '<rootDir>/force-app/test/jest-mocks/lightning/uiRecordApi',
        '^lightning/messageService$':
            '<rootDir>/force-app/test/jest-mocks/lightning/messageService',
        '^lightning/actions$':
            '<rootDir>/force-app/test/jest-mocks/lightning/actions',
        '^lightning/modal$':
            '<rootDir>/force-app/test/jest-mocks/lightning/modal',
        '^lightning/refresh$':
            '<rootDir>/force-app/test/jest-mocks/lightning/refresh',
        '^lightning/logger$':
            '<rootDir>/force-app/test/jest-mocks/lightning/logger'
    },
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv,
    testTimeout: 10000
};
moduleNameMapper: {
  /* CSS library import fix in test context. See:
  https://github.com/salesforce/sfdx-lwc-jest/issues/288) */
  '^c/cssLibrary$':
      '/force-app/main/default/lwc/cssLibrary/cssLibrary.css',
  // Jest mocks
  '^@salesforce/apex$': '/force-app/test/jest-mocks/apex',
  '^@salesforce/schema$': '/force-app/test/jest-mocks/schema',
  '^lightning/navigation$':
      '/force-app/test/jest-mocks/lightning/navigation',
  '^lightning/platformShowToastEvent$':
      '/force-app/test/jest-mocks/lightning/platformShowToastEvent',
  '^lightning/uiRecordApi$':
      '/force-app/test/jest-mocks/lightning/uiRecordApi',
  '^lightning/messageService$':
      '/force-app/test/jest-mocks/lightning/messageService',
  '^lightning/actions$':
      '/force-app/test/jest-mocks/lightning/actions',
  '^lightning/alert$':
      '/force-app/test/jest-mocks/lightning/alert',
  '^lightning/confirm$':
      '/force-app/test/jest-mocks/lightning/confirm',
  '^lightning/prompt$':
      '/force-app/test/jest-mocks/lightning/prompt',
  '^lightning/modal*':
      '/force-app/test/jest-mocks/lightning/modal'
},
