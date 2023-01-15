import Client from '../../types/Client'
import Response from '../../types/Response'

const client = async (init: Client): Promise<Response> => {
  const url: string = Object.entries({ ...init.query }).length !== 0
    ? init.url + '?' + new URLSearchParams({ ...init.query }).toString()
    : init.url
  const startFetchTimer = performance.now()
  try {
    const options: RequestInit = {
      method: init.method,
      headers: {
        'Content-type': 'application/json;charset=utf-8',
        ...init.headers
      }
    }
    const optionsFetch: RequestInit = init.method === 'GET'
      ? options
      : { body: JSON.stringify(init.body ?? {}), ...options }
    const request = await fetch(url, optionsFetch)
    const endFetchTimer = performance.now()
    const fetchTime = endFetchTimer - startFetchTimer
    const startTranformJson = performance.now()
    const data = await request.json()
    const endTranformJson = performance.now()
    const jsonTime = endTranformJson - startTranformJson
    return {
      data,
      headers: request.headers,
      information: {
        timeFetching: fetchTime,
        timeTranformationJson: jsonTime,
        url,
        sentHeaders: { ...optionsFetch.headers },
        sentBody: { ...init.body ?? {} },
        sentQuerys: { ...init.query }
      },
      status: request.status
    }
  } catch (error) {
    throw new Error(String(error))
  }
}

export default client
module.exports.default = client
