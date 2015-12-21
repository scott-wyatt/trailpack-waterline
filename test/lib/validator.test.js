const assert = require('assert')
const app = require('./../testapp')
const lib = require('../../lib')

describe('lib.Validator', () => {
  describe('#validateDatabaseConfig', () => {
    it('should validate a valid database config', () => {
      return lib.Validator.validateDatabaseConfig(app.config.database).then(assert)
    })
  })
})

