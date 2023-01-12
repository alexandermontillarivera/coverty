import Options from './Options'

interface Client extends Partial<Options> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  url: string
}

export default Client
