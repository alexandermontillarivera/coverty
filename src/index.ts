import methods from './util/request'
import setup from './util/setup'
import generator from './util/generator'
import Lib from '../types/Lib'

const lib: Lib = {
  ...methods,
  setup,
  generator
}

export default lib
