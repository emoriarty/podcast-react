import {
  DB_SET_COUNTRY,
  DB_GET_COUNTRY
} from '../actions/types/storage.types'
import * as DB from '../services/storage.service'

const initialState = {}

export const country = (state = initialState, action) => {
  switch (action.type) {
    case DB_SET_COUNTRY:
      return DB.store(action.key, action.value)
    case DB_GET_COUNTRY:
      let country = DB.fetch(action.key)
      return country ? country : state
    default:
      return state
  }
}

