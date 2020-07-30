module.exports = {
  name: 'ag-grid-extension',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ag-grid-extension',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
