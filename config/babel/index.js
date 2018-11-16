const presets = [
  [
    '@babel/env',
    {
      targets: {
        esmodules: true,
      },
    },
  ],
]

const plugins = ['dynamic-import-node', '@babel/plugin-syntax-dynamic-import']

module.exports = {
  presets,
  plugins,
}
