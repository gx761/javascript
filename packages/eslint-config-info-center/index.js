module.exports = {
  extends: [
    'eslint-config-info-center-base',
    'eslint-config-info-center-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {
    'react/require-default-props': [0],
    'react/jsx-filename-extension': [0],
    'react/jsx-indent': [0],
    'react/jsx-indent-props': [0],
    'class-methods-use-this': [0],
  }
};
