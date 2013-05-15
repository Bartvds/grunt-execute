console.log(__filename);
var fs = require('fs');
var path = require('path');

fs.writeFileSync(path.resolve(__dirname + '/../tmp/alpha.txt'), 'alpha 1 2 3');