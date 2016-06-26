import _ from 'underscore'
import {
  SUBSCRIBE_PODCAST,
  UNSUBSCRIBE_PODCAST
} from '../actions/types/subscriptions.types'
import * as DB from '../services/storage.service'

const initialState = DB.fetch(DB.SUBSCRIPTIONS_KEY)

export const subscriptions = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_PODCAST:
      return state.concat([action.podcast])
    case UNSUBSCRIBE_PODCAST:
      return _.without(state, action.podcast)
    default:
      return state 
  }
} 