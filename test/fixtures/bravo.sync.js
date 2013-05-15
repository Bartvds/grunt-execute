var fs = require('fs');
var path = require('path');

console.log('running ' +path.basename(__filename));
var help = require('../helper.js');

fs.writeFileSync(help.tmp + '/bravo.txt', 'bravo 2 3 4');