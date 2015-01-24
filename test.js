var Demo = require('./demo');
var fs = require('fs');

fs.readFile("snakewater.dem", function (err, data) {
	if (err) throw err;
	var demo = Demo.fromNodeBuffer(data);
	var parser = demo.getParser();
	var head = parser.readHeader();
	//console.log(parser.readHeader());
	var message;
	while (message = parser.readMessage()) {
		if (message.parse) {
			message.parse();
		}
	}
});