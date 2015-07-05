// Readme.js

var bl = require('bl')
var fs = require('fs')

fs.createReadStream('./readmeTest.md')
	.pipe(bl(function (err, data) {
		var raw = data.toString();
		console.log("the raw string: \n" + raw)
		raw = raw.replace(/\n|\r/g, " ");
		console.log("")
		console.log("the new string: \n" + raw)
	}))