// API retry count
const MAX_RETRY_COUNT = 1

const USER_AGENT = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36"

/* You can uncomment and send the request with these params
but in my experience, it's not required. */
const DEFAULT_API_OPTIONS = {
  // 'method' : 'get',
  // 'headers' : { "user-agent": USER_AGENT },
  // 'contentType': 'application/json',
}

const PAGESPEED_BASE_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'