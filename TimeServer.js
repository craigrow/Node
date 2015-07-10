// TimeServer.js
// learnyounode exercise #10

// Opens a TCP socket.
// Socket number is passed as a command line parameter.
// Prints the current date and time in YY-MM-DD HH:MM format.

// Load required libraries
var net = require('net')
var strftime = require('strftime')

// Crete the server
var server = net.createServer(function (socket){
	// Write the date to the socket.
	socket.write(strftime('%F %R') + '\n')

	// Close the socket
	socket.end()

	// Note, this also passes and is more compact
	// socket.end(strftime('%F %R') + '\n')
})

// Begin accepting connections on the specified port
server.listen(process.argv[2])