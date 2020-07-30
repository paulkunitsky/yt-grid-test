module.exports = {
  name: 'ag-grid',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ag-grid',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
