
/**
 * Builds a complete URL from a base URL and a map of URL parameters.
 * @param {string} url The base URL.
 * @param {Object.<string, string>} params The URL parameters and values.
 * @return {string} The complete URL.
 * @private
 */
function buildUrl_(url, params) {
  var paramString = Object.entries(params).map(([key, value]) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }).join('&');
  return url + (url.indexOf('?') >= 0 ? '&' : '?') + paramString;
}


/**
 * Just adds https:// to a url
 * @param {string} url The base URL without https.
 * @return {string} The complete URL with https://.
 * @private
 */
function toHTTPS_(url) {
  return `https://${url}`
}