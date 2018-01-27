var plugins = [{
      plugin: require('/home/ubuntu/workspace/using-contentful/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"GatsbyJS","short_name":"GatsbyJS","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"minimal-ui","icons":[{"src":"/favicons/android-icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-icon-144x144.png","sizes":"144x144","type":"image/png"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

const apis = require(`./api-ssr-docs`)

module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }
  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
