export interface Text {
  max: number
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
