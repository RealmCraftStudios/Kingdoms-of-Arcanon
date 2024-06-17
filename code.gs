// Define spreadsheet URLs
const SPREADSHEET_URLS = {
  characterCards: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=0&single=true&widget=true&headers=false",
  attackCards: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=589246038&single=true&widget=true&headers=false",
  defenseCards: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=126896547&single=true&widget=true&headers=false",
  itemCards: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=400758552&single=true&widget=true&headers=false",
  resourceCards: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=1512881124&single=true&widget=true&headers=false",
  rulerCards: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=473596735&single=true&widget=true&headers=false"
};


// Web app entry point
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}


// Function to return spreadsheet URL based on sheet name
function getSheetUrl(sheetName) {
  if (SPREADSHEET_URLS.hasOwnProperty(sheetName)) {
    return SPREADSHEET_URLS[sheetName];
  } else {
    return '';
  }
}
