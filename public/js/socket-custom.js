//se establece conexion con el server

var socket = io();
//los on son para escuchar 
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//son para enviar informacion al server
socket.emit('enviarMensaje', {
    usuario: 'moises',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

//escuchar al server
socket.on('enviarMensaje', function(message) {
    console.log(message);
});