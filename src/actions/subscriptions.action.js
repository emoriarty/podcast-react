import {
  SUBSCRIBE_PODCAST,
  UNSUBSCRIBE_PODCAST
} from './types/subscriptions.types'

export function subscribePodcast(podcast) {
  return {
    type: SUBSCRIBE_PODCAST,
    podcast
  }
}

export function unsubscribePodcast(podcast) {
  return {
    type: UNSUBSCRIBE_PODCAST,
    podcast
  }
}