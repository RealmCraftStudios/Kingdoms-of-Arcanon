// Include function for HTML templating
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// Serve index.html when the web app is accessed
function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate();
}

// Function to fetch data from Character Cards Google Spreadsheet
function getCharacterCardsData() {
  var sheetId = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=0&single=true'; // Replace with actual sheet ID
  var sheetGid = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=0&single=true'; // Replace with actual sheet GID
  return getSpreadsheetData(sheetId, sheetGid);
}

// Function to fetch data from Attack Cards Google Spreadsheet
function getAttackCardsData() {
  var sheetId = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=589246038&single=true'; // Replace with actual sheet ID
  var sheetGid = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=589246038&single=true'; // Replace with actual sheet GID
  return getSpreadsheetData(sheetId, sheetGid);
}

// Function to fetch data from Defense Cards Google Spreadsheet
function getDefenseCardsData() {
  var sheetId = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=126896547&single=true'; // Replace with actual sheet ID
  var sheetGid = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=126896547&single=true'; // Replace with actual sheet GID
  return getSpreadsheetData(sheetId, sheetGid);
}

// Function to fetch data from Item Cards Google Spreadsheet
function getItemCardsData() {
  var sheetId = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=400758552&single=true'; // Replace with actual sheet ID
  var sheetGid = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=400758552&single=true'; // Replace with actual sheet GID
  return getSpreadsheetData(sheetId, sheetGid);
}

// Function to fetch data from Resource Cards Google Spreadsheet
function getResourceCardsData() {
  var sheetId = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=1512881124&single=true'; // Replace with actual sheet ID
  var sheetGid = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=1512881124&single=true'; // Replace with actual sheet GID
  return getSpreadsheetData(sheetId, sheetGid);
}

// Function to fetch data from Ruler Cards Google Spreadsheet
function getRulerCardsData() {
  var sheetId = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=473596735&single=true'; // Replace with actual sheet ID
  var sheetGid = 'docs.google.com/spreadsheets/d/e/2PACX-1vS2HMrAvELJcPvaJ8-YvDGi5RhH2TdqKt29PiEuPH1c_ZpSeyP87dFPhU1r_s2I87WzphAlkfyuP79x/pubhtml?gid=473596735&single=true'; // Replace with actual sheet GID
  return getSpreadsheetData(sheetId, sheetGid);
}

// Function to fetch data from Rulebook Google Document
function getRulebookContent() {
  var docId = 'docs.google.com/document/d/e/2PACX-1vRXHF8KR8xSDhMlLspyyrlINuZ49k1rdTptc8-bQv_I-oY88JwXASWX8mSYEG2WEkuVNtsp2LnIGFML/pub'; // Replace with actual document ID
  return getDocumentContent(docId);
}

// Function to fetch data from World History Google Document
function getWorldHistoryContent() {
  var docId = 'docs.google.com/document/d/e/2PACX-1vRtpFdAtGC3pmqd7JF3bDka54FjMK8AtEvim2NF84YVwzDNyK1QHoxbamA6uPoR28HoxmjYZ9Yeycqc/pub'; // Replace with actual document ID
  return getDocumentContent(docId);
}

// Function to fetch data from a Google Spreadsheet
function getSpreadsheetData(sheetId, sheetGid) {
  var url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/pubhtml?gid=' + sheetGid + '&single=true&widget=true&headers=false';
  
  try {
    var response = UrlFetchApp.fetch(url);
    var htmlBody = response.getContentText();
    return htmlBody;
  } catch (error) {
    Logger.log(error.toString());
    return 'Error fetching data. Please check your sheet ID and GID.';
  }
}

// Function to fetch content from a Google Document
function getDocumentContent(docId) {
  var url = 'https://docs.google.com/document/d/' + docId + '/pub';
  
  try {
    var response = UrlFetchApp.fetch(url);
    var htmlBody = response.getContentText();
    return htmlBody;
  } catch (error) {
    Logger.log(error.toString());
    return 'Error fetching data. Please check your document ID.';
  }
}
