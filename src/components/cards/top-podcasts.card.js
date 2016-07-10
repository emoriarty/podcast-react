'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'

import { fetchPodcast } from '../../actions/podcasts.action'
import { subscribePodcast, unsubscribePodcast } from '../../actions/subscriptions.action'

import Card from './elements/card-wrapper'
import CardHeader from './elements/card-header'
import CardBody from './elements/card-body'
import CardActions from './elements/card-actions'
import CardMenu from './elements/card-menu'
import List from '../lists/list'
import SwitchItem from '../lists/switch.item'
import Spinner from '../spinners/spinner'

/**
 * Each class which extends from DialogComponent
 * must implement this.el pointing to <dialog> tag.
 * You can accomplish it using the next snippet in <dialog>:
 *      ref={ (ref) => this.el = ref }
 */
class TopPodcasts extends Component {
  constructor() {
    super()
    this.handleSubscription = this.handleSubscription.bind(this)
    this.isSubscribed = this.isSubscribed.bind(this)
  }
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

  isSubscribed(podcast) {
    return this.props.subscriptions.find(subscription => (
      subscription.id.attributes['im:id'] === podcast.id.attributes['im:id']
    ))
  }

  handleSubscription(ev) {
    const { topPodcasts, dispatch } = this.props
    let podcast = _.find(topPodcasts, podcast => (podcast.id.attributes['im:id'] === ev.target.value))
    
    if (ev.target.checked) {
      dispatch(subscribePodcast(podcast))
    }
    else {
      dispatch(unsubscribePodcast(podcast))
    }
  }

  render() {
    const {topPodcasts} = this.props
    let content = <CardBody><div className="spinner-wrapper"><Spinner /></div></CardBody>

    if (topPodcasts && topPodcasts.length > 0) { 
      content = <div>
        <CardBody>
          <List>
            { topPodcasts.map(podcast => {
              return <SwitchItem 
                key={podcast.id.label}
                value={podcast.id.attributes['im:id']}
                onSelect={this.handleSubscription}
                checked={this.isSubscribed(podcast)}>
                <img className="card-icon" src={podcast['im:image'][0].label} />
                <span>{podcast.title.label}</span>
              </SwitchItem>
            })}
          </List>
        </CardBody>
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
  const { provider, country, topPodcasts, subscriptions } = state
  return {
    provider, 
    country,
    topPodcasts,
    subscriptions
  }
}

export default connect(mapStateToProps)(TopPodcasts)
