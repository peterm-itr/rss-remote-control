import dotenv from 'dotenv';
import { httpServer } from './src/http_server';
import { wsClose } from './src/websocket_server';

dotenv.config();

console.log(`Start static http server on the ${process.env['HTTP_SERVER_PORT']} port!`);
httpServer.listen(process.env['HTTP_SERVER_PORT']);

process.on('exit', () => {
    httpServer.close();
    wsClose();
});
process.on('SIGINT', () => {
    httpServer.close();
    wsClose();
});
