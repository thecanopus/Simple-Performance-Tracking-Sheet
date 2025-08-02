var ss = SpreadsheetApp.getActiveSpreadsheet()

async function getDataForSite() {
  await getSetDataForSite("My Website")
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("API Calls")
    .addItem("Assess My Website", "getDataForSite")
    .addToUi()
}

async function getSetDataForSite(site) {
  const dataSheet = ss.getSheetByName(site)

  const url = dataSheet.getRange("A1").getValue()
  const PSI_DATA = {
    desktop: await getPSIData(toHTTPS_(url), "desktop"),
    mobile: await getPSIData(toHTTPS_(url), "mobile"),
  }

  const lastRow = dataSheet.getLastRow()
  const lastRowRange = dataSheet.getRange(`A${lastRow + 1}:C${lastRow + 1}`)
  const date = new Date()
  const formattedDate = Utilities.formatDate(date, "GMT", "yyyy/MM/dd HH:mm:ss")
  const TBW_DESKTOP =
    PSI_DATA.desktop.lighthouseResult.audits["total-byte-weight"].numericValue
  const TBW_MOBILE =
    PSI_DATA.mobile.lighthouseResult.audits["total-byte-weight"].numericValue
  if (!TBW_DESKTOP || !TBW_MOBILE) {
    console.error("Data error") // In this case I chose to throw an error when either one of the data wasn't available.
    // Todo: It would be nice to create a retry trigger for next 5-10 minutes here.
    return
  }
  lastRowRange.setValues([[formattedDate, TBW_DESKTOP, TBW_MOBILE]])
}
