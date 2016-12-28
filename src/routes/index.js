/**
 * 总路由
 */
const rootRouters = [{
  path: '/',
  component: require('../App.jsx').default,
  indexRoute: {
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('../components/Home/index.jsx').default)
      })
    }
  },
  childRoutes: [
    require('./M1'),
    require('./M2')
  ]
}];

module.exports = rootRouters;