const { io } = require('../server')
    //con esto se establece la conexion con el cliente
io.on('connection', (client) => {
    console.log('Usuario Conectado');
    //enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    });
    client.on('disconnect', (client) => {
        console.log('Usuario Desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //broadcast a una sola persona
        client.broadcast.emit('enviarMensaje', data)
            /*if (message.usuario) {
                callback({
                    resp: 'todo salio bien'
                });
            } else {
                callback({
                    resp: 'todo salio mal'
                });
            }*/

    });

});