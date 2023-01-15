interface Options {
  body: object
  headers: Partial<Headers> | object
  query: object
}

export interface Headers {
  Authorization: string
  Pragma: string
  Warning: string
  Accept: string
  Cookie: string
  Origin: string
  Allow: string
  Referer: string
  'Content-Length': string
  'Content-Type': string
  'Accept-Encoding': string
  'User-Agent': string
  'Proxy-Authenticate': string
  'Cache-Control': string
  'Accept-Language': string
  'Sec-WebSocket-Key': string
}

export interface Text {
  max: number
}

interface Config {
  baseUrl: string
  globalHeaders?: Partial<Headers> | object
  globalBody?: object
  globalQuerys?: object
}

export interface Generator {
  getAnimal: () => string
  getImageFromBase64: () => string
  getBoolean: () => boolean
  getCarBrand: () => string
  getColor: () => string
  getHexColor: () => string
  getCity: () => string
  getCountryCode: () => string
  getDate: () => string
  getSqlDateTime: () => string
  getEmail: () => string
  getFirtsname: () => string
  getGender: () => string
  getLastname: () => string
  getMovieTitle: () => string
  getNumber: () => number
  getPassword: () => string
  getText: (options?: Partial<Text>) => string
  getTimestamp: () => string
  getTimeZone: () => string
}

interface Methods {
  get: (url: string, options?: Partial<Options>) => Promise<Response>
  post: (url: string, options?: Partial<Options>) => Promise<Response>
  put: (url: string, options?: Partial<Options>) => Promise<Response>
  delete: (url: string, options?: Partial<Options>) => Promise<Response>
  patch: (url: string, options?: Partial<Options>) => Promise<Response>
}

interface Response {
  status: number
  headers: any
  data: any
  information: Information
}

interface Information {
  timeFetching: number
  timeTranformationJson: number
  url: string
  sentHeaders: object
  sentBody: object
  sentQuerys: object
}

declare const coverty: {
  setup: (config: Config) => Methods
  generator: Generator
  get: (url: string, options?: Partial<Options>) => Promise<Response>
  post: (url: string, options?: Partial<Options>) => Promise<Response>
  put: (url: string, options?: Partial<Options>) => Promise<Response>
  delete: (url: string, options?: Partial<Options>) => Promise<Response>
  patch: (url: string, options?: Partial<Options>) => Promise<Response>
}

export default coverty
