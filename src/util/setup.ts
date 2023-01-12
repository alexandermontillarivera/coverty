import client from './client'
import Options from '../types/Options'
import Config from '../types/Config'
import Methods from '../types/Methods'
import Response from '../types/Response'

const setup = (config: Config): Methods => {
  return {
    get: async (url: string, options?: Partial<Options>): Promise<Response> => {
      return await client({
        method: 'GET',
        url: config.baseUrl + url,
        body: { ...options?.body, ...config.globalBody },
        headers: { ...options?.headers, ...config.globalHeaders },
        query: { ...options?.query, ...config.globalQuerys }
      })
    },
    delete: async (url: string, options?: Partial<Options>): Promise<Response> => {
      return await client({
        method: 'DELETE',
        url: config.baseUrl + url,
        body: { ...options?.body, ...config.globalBody },
        headers: { ...options?.headers, ...config.globalHeaders },
        query: { ...options?.query, ...config.globalQuerys }
      })
    },
    patch: async (url: string, options?: Partial<Options>): Promise<Response> => {
      return await client({
        method: 'PATCH',
        url: config.baseUrl + url,
        body: { ...options?.body, ...config.globalBody },
        headers: { ...options?.headers, ...config.globalHeaders },
        query: { ...options?.query, ...config.globalQuerys }
      })
    },
    post: async (url: string, options?: Partial<Options>): Promise<Response> => {
      return await client({
        method: 'POST',
        url: config.baseUrl + url,
        body: { ...options?.body, ...config.globalBody },
        headers: { ...options?.headers, ...config.globalHeaders },
        query: { ...options?.query, ...config.globalQuerys }
      })
    },
    put: async (url: string, options?: Partial<Options>): Promise<Response> => {
      return await client({
        method: 'PUT',
        url: config.baseUrl + url,
        body: { ...options?.body, ...config.globalBody },
        headers: { ...options?.headers, ...config.globalHeaders },
        query: { ...options?.query, ...config.globalQuerys }
      })
    }
  }
}

export default setup
