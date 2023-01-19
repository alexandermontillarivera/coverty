import { animal } from '../data/animal.json'
import { images } from '../data/base64.json'
import { booleans } from '../data/boolean.json'
import { cars } from '../data/car.json'
import { colors, hexcolor } from '../data/color.json'
import { city, countryCode } from '../data/country.json'
import { date as dates, sql as sqlDates } from '../data/date.json'
import { emails } from '../data/email.json'
import { firtnames } from '../data/firtname.json'
import { genders } from '../data/gender.json'
import { lastnames } from '../data/lastname.json'
import { movie } from '../data/movie.json'
import { numbers } from '../data/number.json'
import { passwords } from '../data/password.json'
import { texts } from '../data/text.json'
import { timestamps } from '../data/timestamp.json'
import { mongodbId } from '../data/mongodb.json'
import { timezones } from '../data/timezone.json'
import { Text, Generator } from '../../types/Generator'

const getRandomFromArray = (array: any[]): string | number | boolean => {
  return array[Math.floor(Math.random() * array.length)]
}

const generator: Generator = {
  getAnimal: (): string => {
    return getRandomFromArray(animal) as string
  },
  getImageFromBase64: (): string => {
    return getRandomFromArray(images) as string
  },
  getBoolean: (): boolean => {
    return getRandomFromArray(booleans) as boolean
  },
  getCarBrand: (): string => {
    return getRandomFromArray(cars) as string
  },
  getColor: (): string => {
    return getRandomFromArray(colors) as string
  },
  getHexColor: (): string => {
    return getRandomFromArray(hexcolor) as string
  },
  getCity: (): string => {
    return getRandomFromArray(city) as string
  },
  getCountryCode: (): string => {
    return getRandomFromArray(countryCode) as string
  },
  getDate: (): string => {
    const date = getRandomFromArray(dates) as string
    return date
  },
  getSqlDateTime: (): string => {
    return getRandomFromArray(sqlDates) as string
  },
  getEmail: (): string => {
    return getRandomFromArray(emails) as string
  },
  getFirtsname: (): string => {
    return getRandomFromArray(firtnames) as string
  },
  getGender: (): string => {
    return getRandomFromArray(genders) as string
  },
  getLastname: (): string => {
    return getRandomFromArray(lastnames) as string
  },
  getMovieTitle: (): string => {
    return getRandomFromArray(movie) as string
  },
  getNumber: (): number => {
    return getRandomFromArray(numbers) as number
  },
  getPassword: (): string => {
    return getRandomFromArray(passwords) as string
  },
  getText: (options: Partial<Text> = { max: 0 }): string => {
    if (options.max !== 0) {
      const text = getRandomFromArray(texts) as string
      return text.substring(0, options.max)
    }
    return getRandomFromArray(texts) as string
  },
  getTimestamp: (): string => {
    return getRandomFromArray(timestamps) as string
  },
  getTimeZone: (): string => {
    return getRandomFromArray(timezones) as string
  },
  getMongodbId: (): string => {
    return getRandomFromArray(mongodbId) as string
  }
}

export default generator
module.exports.default = generator
