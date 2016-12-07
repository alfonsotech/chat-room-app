var app = require('express')();
var emoji =require('./emojiData.js');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var websocket = require('./websocket')(io);

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.post('/emoji', function(request, response){
  response.send(emoji);
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
