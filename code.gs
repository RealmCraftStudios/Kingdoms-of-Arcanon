function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getDataFromSheet(sheetUrl, filterType) {
  var sheet = SpreadsheetApp.openByUrl(sheetUrl).getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  if (filterType === 'whole') {
    return values;
  } else if (filterType === 'headers') {
    return [values[0]]; // Return only the header row
  } else {
    return []; // Invalid filter type
  }
}
