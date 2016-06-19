'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'

import { fetchPodcast } from '../../actions/podcasts.action'

import Card from './elements/card-wrapper'
import CardHeader from './elements/card-header'
import CardBody from './elements/card-body'
import CardActions from './elements/card-actions'
import CardMenu from './elements/card-menu'
import List from '../lists/list'
import PodcastListItem from '../lists/podcast.item'
import Spinner from '../spinners/spinner'

/**
 * Each class which extends from DialogComponent
 * must implement this.el pointing to <dialog> tag.
 * You can accomplish it using the next snippet in <dialog>:
 *      ref={ (ref) => this.el = ref }
 */
class TopPodcasts extends Component {
  componentDidMount() {
    const { provider, country } = this.props
    
    if (provider && country) {
      const feedType = _.findWhere(provider.commons.feed_types, {
        translation_key: 'toppodcasts'
      })

      if (feedType) {
        const url = feedType.urlPrefix
          .replace('<%= country_code %>', country.country_code)
          .replace('<%= parameters %>', 'limit=10/json')

        this.props.dispatch(fetchPodcast(url))
      }
      else {
        // TODO show somw kind of error
      }
    }
  }

  render() {
    const {topPodcasts} = this.props
    let content = <CardBody><div className="spinner-wrapper"><Spinner /></div></CardBody>

    if (topPodcasts && topPodcasts.length > 0) { 
      content = <div>
        <CardBody>
          <List>
            { topPodcasts.map(item =>
              <PodcastListItem key={item.id.label} name={item.title.label} icon={item['im:image'][0].label} />) }
          </List>
        </CardBody>
        <CardActions>
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Get Started
          </a>
        </CardActions>
        <CardMenu>
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </CardMenu>
      </div>
    }

    return( 
      <Card>
        <CardHeader title="Top Ten" />
          { content }
      </Card>
    )
  }
}

TopPodcasts.displayName = 'CardsTopPodcasts'

// Uncomment properties you need
//TopPodcasts.propTypes = {};
//TopPodcasts.defaultProps = {};

const mapStateToProps = state => {
  const { provider, country, topPodcasts } = state
  return {
    provider, 
    country,
    topPodcasts
  }
}

export default connect(mapStateToProps)(TopPodcasts)
