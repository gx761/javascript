module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      spread: true,
      restParams: true,
      destructuring: true,
      experimentalDecorators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-console': [0],
    'class-methods-use-this': [0],
    'no-underscore-dangle': [0],
    'max-len': [1, { code: 140 }],
    'no-return-assign': [0],
    indent: [2, 2],
    'no-mixed-operators': [0],
    radix: [0],
    'no-use-before-define': [0],
    'consistent-return': [0],
    'no-plusplus': [0]
  },
  globals: {
    window: true,
    document: true,
    location: true,
    describe: true,
    beforeEach: true,
    it: true,
    afterEach: true,
    app: true,
    mm: true,
    mock: true,
    request: true,
    assert: true,
    before: true, // mocha before()
    after: true, // mocha after()
    Mock: true, // mockjs
    Random: true, // mockjs Mock.Random
    localStorage: true,
    ga: true
  },
};
