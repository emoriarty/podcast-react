import yuiFetch from '../utils/yui-fetch.js'
import _ from 'underscore';

export function fetchMediaTypes() {
  return yuiFetch('/data/media-types.json')
    .then((r) => {
      console.log(r)
      return _.findWhere(r.results, {store: 'podcast'})
    })
}

export function fetchCountries() {
  return yuiFetch('/data/countries.json')
    .then(r => {
      let countriesWithPodcasts = _.inject(r.results, function(memo, country) {
        if (country.stores.podcast) {
          // If the country icon link has no host, then add it
          if (!country.flag_icon.match(/^(http|https):\/\//)) {
            memo.push({ ...country, flag_icon: 'https://rss.itunes.apple.com' + country.flag_icon });
          }
          else {
            memo.push(country);
          }
        }
        return memo;
      }, []);

      // grouping by region
      console.log(_.groupBy(countriesWithPodcasts, (country) => country.region))

      //

      return countriesWithPodcasts
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
