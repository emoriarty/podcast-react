import {
  REQUEST_PODCASTS,
  RECEIVE_PODCASTS,
  ERROR_PODCASTS
} from '../actions/types/podcasts.types'

const initialState = { topPodcasts: null }

function initData(state, action) {
  switch(action.type) {
    case REQUEST_PODCASTS:
      return state
    case RECEIVE_PODCASTS:
      console.log('ACTION', action)
      return action.topPodcasts
    case ERROR_PODCASTS:
      return state
  }
}

export const topPodcasts = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_PODCASTS:
    case RECEIVE_PODCASTS:
    case ERROR_PODCASTS:
      return initData(state, action)
    default:
      return state
  }
}
