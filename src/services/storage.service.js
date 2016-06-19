import Lockr from 'lockr'

export const COUNTRY_KEY = 'COUNTRY'

export function store(key, value) {
  Lockr.set(key, value)
  return value
}

export function fetch(key) {
  return Lockr.get(key)
}