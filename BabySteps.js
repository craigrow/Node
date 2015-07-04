// BabySteps.js
// For learnyounode exercise #2

var b = process.argv;
var s = 0;

for (i=2; i<process.argv.length; i++) {
	s += +process.argv[i]
};

console.log(s);