import Methods from './Methods'
import Config from './Config'
import { Generator } from './Generator'

interface Lib extends Methods {
  setup: (config: Config) => Methods
  generator: Generator
}

export default Lib
