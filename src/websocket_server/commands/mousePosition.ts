import { mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';
import { CommandHandler } from './commandHandler';

export const mousePosition: CommandHandler = async (_args: string[], wsStream: Duplex): Promise<string> => {
    const position = await mouse.getPosition();

    const response = `mouse_position ${position.x},${position.y}`;
    wsStream.write(response);

    return response;
};
