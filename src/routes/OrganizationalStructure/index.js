module.exports = {
  path: 'organizationalstructure',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../containers/OrganizationalStructure').default)
    })
  }
}