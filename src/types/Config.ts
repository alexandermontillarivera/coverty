import { Headers } from './Options'

interface Config {
  baseUrl: string
  globalHeaders?: Partial<Headers> | object
  globalBody?: object
  globalQuerys?: object
}

export default Config
