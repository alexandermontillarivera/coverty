import Response from './Response'
import Options from './Options'

interface Methods {
  get: (url: string, options?: Partial<Options>) => Promise<Response>
  post: (url: string, options?: Partial<Options>) => Promise<Response>
  put: (url: string, options?: Partial<Options>) => Promise<Response>
  delete: (url: string, options?: Partial<Options>) => Promise<Response>
  patch: (url: string, options?: Partial<Options>) => Promise<Response>
}

export default Methods
