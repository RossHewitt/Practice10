const fs = require('fs');


const dataBuffer = fs.readFileSync('Playground/data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city)
data.name = "Olga";
data.city = "Terre Haute";
const updateDataJSON = JSON.stringify(data)
fs.writeFileSync('Playground/data.json', updateDataJSON)
