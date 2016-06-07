import fetch from 'isomorphic-fetch'

function callFetch(url, language, resolve, reject) {
  fetch(url + language + '.json')
    .then(r => {
      if (r.ok) {
        r.json().then(results => {
          resolve({ results })
        })
      }
      else if (!r.ok && language.length > 2) {
        callFetch(url, language.slice(0, 2), resolve, reject)
      }
      else {
        reject(r.statusText)
      }
    })
}

export function fetchTranslations(language) {
  return new Promise((resolve, reject) => (
    callFetch('/assets/translations/', language, resolve, reject)
  ))
}
