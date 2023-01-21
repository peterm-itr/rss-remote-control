import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';

const WS_PORT = parseInt(process.env['WEBSOCKET_SERVER_PORT'] as string, 10) || 8080;

export const wsServer = new WebSocketServer({
    host: 'localhost',
    port: WS_PORT
});

export const wsClose = () => {
    wsServer.clients.forEach((client: WebSocket) => {
        client.close();
    });

    wsServer.close((err: Error | undefined) => console.error(err));
};

wsServer.on('listening', () => {
    console.log(`WebSocket server started: `, wsServer.address());
});

wsServer.on('connection', (client: WebSocket) => {
    const stream = createWebSocketStream(client, { decodeStrings: false, encoding: 'utf8' });

    stream.on('data', async (command: string) => {
        console.debug(`Received command: ${command}`);
    });

    client.on('close', () => {
        console.debug('Client disconnected');
    });
});
