import methods from './util/request'
import setup from './util/setup'
import generator from './util/generator'

export const lib = {
  ...methods,
  setup,
  generator
}
module.exports = lib
module.exports.default = lib
export default lib
