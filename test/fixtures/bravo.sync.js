console.log(__filename);
var fs = require('fs');
var path = require('path');

fs.writeFileSync(path.resolve(__dirname + '/../tmp/bravo.txt'), 'bravo 2 3 4');