const XLSX = require('xlsx');
const fs = require('fs');

// Function to read Excel file and convert to JSON
function excelToJson(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
}

// Path to your Excel file
const excelFilePath = 'cypress\\fixtures\\Book2.xlsx';

// Convert Excel to JSON
const jsonData = excelToJson(excelFilePath);

// Write JSON data to a file in the fixture folder
const fixtureFolderPath = 'cypress/fixtures';
fs.writeFileSync(`${fixtureFolderPath}/data.json`, JSON.stringify(jsonData, null, 2));

console.log('Excel file converted to JSON and saved to fixture folder.');