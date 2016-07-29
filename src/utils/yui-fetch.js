import fetch from 'isomorphic-fetch'

const config        = require('config')
const ENV           = config.default.appEnv
const PROVIDER_HOST = config.default.providerHost

export default function yuiFetch(url) {
  if (ENV === 'dist') {
    return new Promise((resolve, reject) => {
      try {
        YUI().use('yql', (Y) => {
          Y.YQL('select * from html where url=\'' + PROVIDER_HOST + url + '\'', (r) => {
            if (r.query.results.body.length > 0) {
              resolve({
                results: JSON.parse(r.query.results.body)
              })
            }
            else {
              reject({
                message: 'No results'
              })
            }
         })
        })
      }
      catch(e) {
        reject({
          message: e
        });
      }
    })
  }
  else {
    return new Promise((resolve, reject) => {
      fetch(PROVIDER_HOST + url)
        .then(r => {
          if (r.status == 200)
            r.json()
              .then(results => resolve({ results }))
          else if (r.status >= 400)
            reject({ message: 'Something happend when fetching data' })
          else
            reject({ message: 'No results' })
        })
    })
  }
}
