import dotenv from 'dotenv';
import { httpServer } from './src/http_server';
import { wsClose } from './src/websocket_server';

dotenv.config();

console.log(`Start static http server on the ${process.env['HTTP_SERVER_PORT']} port!`);
httpServer.listen(process.env['HTTP_SERVER_PORT']);

const cleanup = () => {
    httpServer.close();
    wsClose();
}

process.on('exit', cleanup);
process.on('SIGINT', cleanup);
process.on('SIGHUP', cleanup);
process.on('SIGQUIT', cleanup);
process.on('SIGTERM', cleanup);
process.on('uncaughtException', cleanup);
