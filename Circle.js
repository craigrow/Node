// Circle.js
// Just practicing creating modules.
// Exports two functions which calculate area and circumference of a cirlce.

var PI = Math.PI

exports.area = function (r) {
	return PI * r * r
}

exports.circumference = function (r) {
	return 2 * PI * r
}