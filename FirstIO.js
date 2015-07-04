// FirstIO.js
// For learnyounode exercise #3

// Load the required module.
var fs = require('fs');

// Create a var to hold the count of lines.
var c = 0;

// Read the file into a string var.
f = fs.readFileSync(process.argv[2]).toString();

// Split the string on carriage returns and hold the lines in an array.
a = f.split('\n');

// Loop through the array to count the lines
for ( i=0; i<a.length; i++) {
	c += 1;
};

// Remove one from the count because the test file does not end with a carriage return.
c -= 1

// Print the result.
console.log(c);