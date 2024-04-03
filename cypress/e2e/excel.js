const XLSX = require('xlsx');
const fs = require('fs');
const finalObject = {};

const data = XLSX.read('C:\\Users\\acer\\Desktop\\.Book1.xlsx', { type: 'buffer' });

data.SheetNames.forEach(sheetName => {
    let rowObject = XLSX.utils.sheet_to_json(data.Sheets[sheetName]);
  
    finalObject[sheetName] = rowObject;
  });
  console.log(finalObject)
  fs.writeFileSync('./target.json', JSON.stringify(dataObject));
