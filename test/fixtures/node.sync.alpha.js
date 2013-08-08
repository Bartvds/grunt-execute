var help = require('../helper.js');
var ctx = help.getContext(__filename);

var fs = require('fs');

fs.writeFileSync(ctx.dest, ctx.data);