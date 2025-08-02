/**
 * Fetches assessment data from the Google PageSpeed Insights API.
 *
 * @param {string} requestUrl - The full URL to be analyzed (including `https://`).
 * @param {string} strategy - The PageSpeed Insights API strategy parameter (`mobile` or `desktop`).
 * @returns {Object} - The parsed JSON response from the API.
 *
 * @throws {Error} If the request fails after the maximum number of retries.
 * @async
 * @public
 */
async function getPSIData(requestUrl, strategy) {
  const data = {
    url: requestUrl,
    key: '**** REPLACE THIS WHOLE STRING WITH YOUR PAGESPEEDINSIGHTS v5 TOKEN. ****', // For example: key: 'A461m125h125j1h312kh4124kjh1412h421',
    strategy
  }

  var options = {
    ...DEFAULT_API_OPTIONS,
    muteHttpExceptions: true
  };

  let res = { statusCode: 0 }
  let retryCounter = 0
  do {
    retryCounter++
    res = await UrlFetchApp.fetch(buildUrl_(PAGESPEED_BASE_URL, data), options)
  } while (res.getResponseCode() !== 200 && retryCounter < MAX_RETRY_COUNT)
  if (res.getResponseCode() !== 200) {
    // console.error(`API fetch failed for strategy ${strategy} after ${retryCounter} tries.`)
    throw Error(`API fetch failed for strategy ${strategy} after ${retryCounter} tries.`)
  }
  return JSON.parse(res)
}


