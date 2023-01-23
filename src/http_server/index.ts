import * as fs from 'fs';
import * as path from 'path';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import ErrnoException = NodeJS.ErrnoException;

export const httpServer = createServer((req: IncomingMessage, res: ServerResponse) => {
    const currentDirectory = path.resolve(path.dirname(''));
    const requestedFilePath = path.join(
        currentDirectory,
        (req.url === '/' ? '/front/index.html' : `/front${req.url}`),
    );

    fs.readFile(requestedFilePath, (err: ErrnoException | null, data: Buffer) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});
