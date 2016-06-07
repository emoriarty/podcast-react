export function fetchTranslations(language) {
  return new Promise((resolve, reject) => {
    fetch('/assets/translations/' + language + '.json')
      .then(r => resolve(JSON.parse(r)))
      .catch(e => {
        if (language.length > 3) {
          fetch('/assets/translations/' + language.slice(0, 2) + '.json')
            .then(r => resolve(JSON.parse(r)))
            .catch(e => reject())// TODO add error message
        }
        else {
          // TODO add error message
          reject();
        }
      })
  })
}
