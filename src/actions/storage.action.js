import {
  DB_SET_COUNTRY,
  DB_GET_COUNTRY
} from './types/storage.types'
import {
  COUNTRY_KEY
} from '../services/storage.service'

export function setCountry(value, key = COUNTRY_KEY) {
  return {
    type: DB_SET_COUNTRY,
    key: key,
    value: value
  }
}

export function getCountry(key = COUNTRY_KEY) {
  return {
    type: DB_GET_COUNTRY,
    key: key
  }
}