var fs = require('fs');
var path = require('path');

console.log('running ' +path.basename(__filename));

fs.writeFileSync(path.resolve(__dirname + '/../tmp/alpha.txt'), 'alpha 1 2 3');