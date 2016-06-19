'use strict'

require('styles/containers/InitApp.sass')

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTranslationsData } from '../actions/translation.action'
import { fetchProviderData } from '../actions/provider.action'
import { getCountry } from '../actions/storage.action'
import Root from './root.abstract'
import LayoutTabs from '../components/layouts/TabsComponent'
import Notification from '../components/notifications/notification.component'
import * as NotificationActions from '../actions/notification.action'
import * as DB from '../services/storage.service'

class App extends Root {
  constructor(props) {
    super(props)

    this.state = {
      modals: {
        isShowingCoutries: false,
        isShowingMessage: false
      },
      message: '',
      appName: 'Podcaster',
      pages: [{
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
      }, {
        id: 'podcasts',
        title: 'My podcasts'
      }, {
        id: 'trends',
        title: 'Last trends'
      }, {
        id: 'settings',
        title: 'Settings'
      }]
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchTranslationsData())
    this.props.dispatch(fetchProviderData())
    super.componentDidMount()
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps)
    const {dispatch, provider, translations} = nextProps

    // Check if there is a country stored 
    if (!DB.fetch(DB.COUNTRY_KEY)) {
      this.context.router.push('/first-time/country')
    } else {
      dispatch(getCountry())
      //TODO fetch rss for country 
      
    }
  }

  reload() {
    window.location.reload();
  }

  manageData(data) {
    if (data.countries && data.countries.length > 0) {
      window.loadingScreen.finish()
    }

    if (data.ready) {
      this.closeSplash()
    }
  }

  closeSplash() {
    if (super.isSplash())
      window.loadingScreen.finish()
  }

  render() {
    const { provider } = this.props

    return (
      <div className="index">

        <Notification />

        { provider.ready &&
            <LayoutTabs appName={this.props.translations.appName} pages={this.state.pages}>
              {this.props.children}
            </LayoutTabs> }
      </div>
    );
  }
}

App.displayName = 'ContainersApp';

// Uncomment properties you need

App.propTypes = {
  provider: PropTypes.object.isRequired
}

App.contextTypes = {
  router: React.PropTypes.object
}
// App.defaultProps = {};

const mapStateToProps = state => {
  const { provider, translations } = state

  return {
    provider,
    translations
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(NotificationActions, dispatch),
    dispatch
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
