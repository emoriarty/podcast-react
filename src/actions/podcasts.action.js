import _ from 'underscore'
import * as Notifications from './notification.action'
import {
  fetchTopPodcasts
} from '../services/itunes.service'
import {
  REQUEST_PODCASTS,
  RECEIVE_PODCASTS,
  ERROR_PODCASTS
} from './types/podcasts.types'

function requestPodcasts() {
  return {
    type: REQUEST_PODCASTS
  }
}

function receivePodcasts(data) {

  return {
    type: RECEIVE_PODCASTS,
    topPodcasts: _.map(data.feed.entry, (value) => (value)),
    receivedAt: Date.now()
  }
}

function errorPodcasts() {
  return {
    type: ERROR_PODCASTS
  }
}

function fetchData(urlFeed) {
  return dispatch => {
    dispatch(requestPodcasts())

    try {
      Promise.all([
        fetchTopPodcasts(urlFeed)
      ])
      .then(
        (result) => {
          dispatch(receivePodcasts(result[0]))
        },
        (error) => {
          dispatch(errorPodcasts())
          dispatch(Notifications.showAlert({
            title: 'Error fetching topPodcasts',
            text: 'TODO set error message'
          }))
          console.error(error)
        }
      )
    }
    catch (e) {
      dispatch(errorInitialData(e));
    }
  }
}

export function fetchPodcast(urlFeed) {
  return (dispatch, getState) => {
    return dispatch(fetchData(urlFeed))
  }
}