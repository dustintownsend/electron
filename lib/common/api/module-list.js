// Common modules, please sort alphabetically
module.exports = [
  {name: 'clipboard', file: 'clipboard'},
  {name: 'crashReporter', file: 'crash-reporter'},
  {name: 'nativeImage', file: 'native-image'},
  {name: 'shell', file: 'shell'},
  {name: 'CallbacksRegistry', file: 'callbacks-registry', private: true},
  // The internal modules, invisible unless you know their names.
  {name: 'deprecate', file: 'deprecate', private: true},
  {name: 'deprecations', file: 'deprecations', private: true},
  {name: 'isPromise', file: 'is-promise', private: true}
]
