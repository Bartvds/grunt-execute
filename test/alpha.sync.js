console.log(__filename);
var fs = require('fs');

fs.writeFileSync(__dirname + '../tmp/alpha.txt', 'alpha 1 2 3');