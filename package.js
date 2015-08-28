Package.describe({
  name: 'johnschult:microtime',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for node-microtime.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/johnschult/meteor-microtime',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  Npm.depends({
    'microtime': '2.0.0'
  });
  api.versionsFrom('1.1.0.3');
  api.addFiles('microtime.js');
  api.export('Microtime', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('johnschult:microtime');
  api.addFiles('microtime-tests.js');
});
