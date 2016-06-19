export function fetchJSONP(feedUrl, resolve, reject) {
  let options = {
      url: feedUrl,
      dataType: "jsonp",
      cache: true,
      success: (result) => (resolve(result)),
      error: (error) => (reject(error))
  }
  $.ajax(options)
}