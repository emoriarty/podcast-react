/*export function fetchFeed(feedUrl) {
  return new Promise((resolve, reject) => {
    const intervalID =  setInterval(function repeat() {
      if (google.feeds.Feed) {
        clearInterval(intervalID)

        let feed = new google.feeds.Feed(feedUrl)
        feed.setResultFormat(google.feeds.Feed.JSONL_FORMAT)
        feed.load(result => {
          console.log('result', result)
          if (!result.error) {
            resolve(result.feed)
          }
          else {
            reject(result.error)
          }
        })
      }
      else {
        repeat()
      }
    }, 500)
  })
}*/

export function $fetchFeed(feedUrl) {
  return new Promise((resolve, reject) => {
    let options = {
        url: feedUrl,
        dataType: "jsonp",
        cache: true,
        success: (result) => (resolve(result)),
        error: (error) => (reject(error))
    }
    $.ajax(options)
  })
}