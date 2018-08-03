const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', function(req, res) {
  res.sendFile(__dirname + '/admin.html');
});

io.on('connection', function(socket) {
  socket.on('sendBeacon', function() {
    io.emit('beacon', 123);
  });
});

http.listen(3000, function() {
  console.log('GameOfAlps listening on *:3000');
});
