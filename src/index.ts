import methods from './util/request'
import setupMaster from './util/setup'
import generator from './util/generator'

export const lib = {
  ...methods,
  setup: setupMaster,
  generator
}

export * as generator from './util/generator'
export * as setup from './util/setup'

module.exports = lib
module.exports = { generator, setup: setupMaster }
module.exports.default = lib
export default lib
