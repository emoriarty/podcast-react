import yuiFetch from '../utils/yui-fetch.js'
import _ from 'underscore';
import { fetchJSONP } from './fetcher.service'

export function fetchMediaTypes() {
  return yuiFetch('/data/media-types.json')
    .then((r) => {
      return _.findWhere(r.results, {store: 'podcast'})
    })
}

export function fetchRegions() {
  return yuiFetch('/data/countries.json')
    .then(r => {
      let countriesWithPodcasts = _.inject(r.results, function(memo, country) {
        if (country.stores.podcast) {
          // If the country icon link has no host, then add it
          if (!country.flag_icon.match(/^(http|https):\/\//)) {
            memo.push({ ...country, flag_icon: 'https://rss.itunes.apple.com' + country.flag_icon })
          }
          else {
            memo.push(country)
          }
        }
        return memo
      }, [])

      // grouping by region
      let countriesGroupByRegion = _.groupBy(countriesWithPodcasts, (country) => country.region)
      let regions = []
      Object.keys(countriesGroupByRegion).forEach(function(key, index) {
        regions.push({
          id: index,
          translation_key: key,
          countries: countriesGroupByRegion[key]
        })
      })

      return regions
    })
}

export function fetchMediaTypesTranslations(language) {
  return yuiFetch('/data/lang/' + language + '/media-types.json')
    .then(r => {
      return r.results
    })
}

export function fetchCommonTranslations(language) {
  return yuiFetch('/data/lang/' + language + '/common.json')
    .then(r => {
      return r.results
    })
}

export function fetchPodcasts({limit, genre, explicit}) {
  return yuiFetch('/data/lang/' + language + '/media-types.json')
    .then(r => {
      return r.results
    })
}

export function fetchTopPodcasts(feedUrl) {
  return new Promise((resolve, reject) => {
    fetchJSONP(feedUrl, resolve, reject)
  })
}