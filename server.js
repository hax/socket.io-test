var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
//require('demoshare')(http)

app.get('/', function (req, res) {
	res.sendfile('index.html')
})

io.on('connection', function (socket) {
	socket.emit('chat', 'Welcome to chat demo!')
	socket.on('chat', function (text) {
		io.emit('chat', text)
	})
})

http.listen(process.env.port || 3000)
