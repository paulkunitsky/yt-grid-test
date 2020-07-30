module.exports = {
  name: 'yt-mock-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/yt-mock-api',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
