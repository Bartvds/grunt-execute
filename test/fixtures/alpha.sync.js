var fs = require('fs');
var path = require('path');

console.log('running ' +path.basename(__filename));
var help = require('../helper.js');

fs.writeFileSync(help.tmp + '/alpha.txt', 'alpha 1 2 3');