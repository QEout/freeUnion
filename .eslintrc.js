module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 1,//这句话表示在文件末尾可以不加回车
    'space-before-function-paren': 1 //这句话表示在函数后可以不加空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
