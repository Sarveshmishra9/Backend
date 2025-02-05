const fs = require('fs'); //import
const data=fs.readFileSync("./data.txt");
console.log(data.toString()); // tostring -> hello CE Student ko return jo data.txt me hai