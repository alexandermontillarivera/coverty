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

export default Response
