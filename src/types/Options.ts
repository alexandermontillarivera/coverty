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

export default Options
