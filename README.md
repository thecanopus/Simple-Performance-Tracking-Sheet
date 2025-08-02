# Simple-Performance-Tracking-Sheet

## About

Just a simple sheet paired with Google Apps Script functionality utilising Google PageSpeedInsights API and Google Apps Script to log and track site performance (Total Byte Weight is the default functionality).

## How to use

1. Make a copy of [Performance Tracker Sheet [Public]](https://docs.google.com/spreadsheets/d/10AOsotC4djGQxjHGY_uRJXjy1d-xNkrlyw1e4h0WVJA/edit?usp=sharing)

2. Open the Apps Script file via Menu Bar -> Extensions -> Apps Script.

3. Copy paste every file from this repo into the editor. (Or [Clasp](https://developers.google.com/apps-script/guides/clasp) it if you're fancy like me)

4. Follow the guide on the sheet and run the code.

Easy peasy.

## Customisation (Optional)

1. For automation, make some time based triggers on Apps Script.

2. The PageSpeedInsights API response includes all sorts of data. Customize the code however you like to log other stuff as well.

3. You can customize the Google Sheet "API Calls" menu through the `onOpen` function in the `Code.gs` file.

> Like all my other open source codes, use responsibly and leave a star if you like it.

> Special thanks to Google and the developers behind Apps Script and PageSpeedInsights and all their integrations.
