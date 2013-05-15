
var fs = require('fs');
var path = require('path');

console.log('running ' +path.basename(__filename));

fs.writeFileSync(path.resolve(__dirname + '/../tmp/bravo.txt'), 'bravo 2 3 4');