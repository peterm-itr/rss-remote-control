import { Duplex } from 'stream';

export type CommandHandler = (args: string[], webSocketStream: Duplex) => Promise<string>;
