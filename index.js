var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
//We define a route handler / that gets called when we hit our website home.
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//We make the http server listen on port 3000.
