import * as Notifications from './notification.action'
import {
  fetchMediaTypes,
  fetchRegions
} from '../services/itunes.service'
import {
  REQUEST_PROVIDER_DATA,
  RECEIVE_PROVIDER_DATA,
  ERROR_PROVIDER_DATA
} from './types/provider.types'
const MOCKUP_DATA = {
  id: 'home',
  title: 'Home',
  active: true,
  data: {
    topodcasts: [{
      id: 1,
      name: 'La órbita de Endor',
      icon: '//cdn.webstatics.net/podcast/podcastimage_477376.gif'
    }, {
      id: 2,
      name: 'Todopoderosos',
      icon: '//pbs.twimg.com/profile_images/565955444963692544/wXLomgB-.jpeg'
    }, {
      id: 3,
      name: 'La rosa de los vientos',
      icon: '//epg.ondacero.es/static/images/sections/section_1002825.png'
    }, {
      id: 4,
      name: 'Negra y criminal',
      icon: '//cdn.webstatics.net/podcast/podcastimage_477376.gif'
    }, {
      id: 5,
      name: 'Carne cruda',
      icon: '//lareplica.es/wp-content/uploads/2015/07/Carne_cruda_logo.jpg'
    }]
  }
}

function requestInitialData() {
  return {
    type: REQUEST_PROVIDER_DATA
  }
}

function receiveInitialData(data) {
  return {
    type: RECEIVE_PROVIDER_DATA,
    data,
    receivedAt: Date.now()
  }
}

function errorInitialData() {
  return {
    type: ERROR_PROVIDER_DATA
  }
}

function fetchData() {
  return dispatch => {
    dispatch(requestInitialData())

    try {
      Promise.all([
        fetchMediaTypes(),
        fetchRegions()
      ])
      .then(
        (result) => {
          dispatch(receiveInitialData({
            commons: result[0], // common values
            regions: result[1], // regions and countries metadata
            data: MOCKUP_DATA
          }))
        },
        (error) => {
          dispatch(errorInitialData(error))
          dispatch(Notifications.showAlert({
            title: 'Terminal error',
            text: 'This is embarrasing but the app has crashed. Click the button to reload, in case this message is shown again, please let us know.'
          }))
        }
      )
    }
    catch (e) {
      dispatch(errorInitialData(e));
    }
  }
}

function shouldFetchData(state) {
  const data = state.provider;
  if (!data.data) {
    return true
  } else if (data.loading) {
    return false
  }

  return false
}

export function fetchProviderData() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  }
}
