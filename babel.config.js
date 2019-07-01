module.exports = api => {
  api.cache.never()

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
  const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-class-properties",
    ["styled-jsx/babel", { sourceMaps: true }],
  ]

  return {
    presets,
    plugins
  }
}
