import client from './client'
import Response from '../../types/Response'
import Methods from '../../types/Methods'
import Options from '../../types/Options'

const methods: Methods = {
  get: async (url: string, options?: Partial<Options>): Promise<Response> => {
    return await client({ method: 'GET', url, ...options })
  },
  post: async (url: string, options?: Partial<Options>): Promise<Response> => {
    return await client({ method: 'POST', url, ...options })
  },
  put: async (url: string, options?: Partial<Options>): Promise<Response> => {
    return await client({ method: 'PUT', url, ...options })
  },
  delete: async (url: string, options?: Partial<Options>): Promise<Response> => {
    return await client({ method: 'DELETE', url, ...options })
  },
  patch: async (url: string, options?: Partial<Options>): Promise<Response> => {
    return await client({ method: 'PATCH', url, ...options })
  }
}

export default methods
module.exports.default = methods
