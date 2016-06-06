'use strict'

require('styles/containers/InitApp.sass')

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchInitialData } from '../../actions/provider.action'
import LayoutTabs from '../layouts/TabsComponent'
import CountriesDialog from '../dialogs/CountriesDialogComponent'
import Page from '../pages/TabPageComponent'
import HomePage from '../pages/HomePageComponent'
import Notification from '../../notifications/components/notification.component'
import * as NotificationActions from '../../notifications/actions/notification.action'

const yeomanImage = require('../../images/yeoman.png');

class InitAppComponent extends Component {
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
    this.props.dispatch(fetchInitialData())
  }

  componentWillReceiveProps(nextProps) {
    let data = nextProps.coreData
    //this.manageData(data)
    if (data.fail || data.ready)
      window.loadingScreen.finish();

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

  isSplash() {
    return !document.classList.contains('pg-loaded')
  }

  closeSplash() {
    if (this.isSplash())
      window.loadingScreen.finish()
  }

  render() {
    const { coreData, message } = this.props

    return (
      <div className="index">

        <Notification />

        { this.state.isShowingCountries &&
            <CountriesDialog countries={coreData.countries || []} /> }

        { coreData.ready &&
            <LayoutTabs appName={this.state.appName} pages={this.state.pages}>
              {this.state.pages.map((page) => {
                switch(page.id) {
                  case 'home':
                    return <HomePage key={page.id} data={page} />;
                  default:
                    return (
                      <Page key={page.id} data={page}>
                        <img src={yeomanImage} alt="Yeoman Generator" />
                      </Page>
                    );
                }
              })}
            </LayoutTabs> }

      </div>
    );
  }
}

InitAppComponent.displayName = 'ContainersInitAppComponent';

// Uncomment properties you need

InitAppComponent.propTypes = {
  coreData: PropTypes.object.isRequired,
  message: PropTypes.object
}
// InitAppComponent.defaultProps = {};

const mapStateToProps = state => {
  const { coreData } = state

  return {
    coreData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(NotificationActions, dispatch),
    dispatch
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(InitAppComponent)
