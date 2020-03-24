module.exports = {
  name: 'sdg-captcha',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sdg-captcha',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
