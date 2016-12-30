module.exports = {
  path: '/departmentdetails(/:name)',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../containers/Departmentdetails').default)
    })
  }
}