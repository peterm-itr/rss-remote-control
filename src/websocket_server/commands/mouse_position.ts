import { mouse } from '@nut-tree/nut-js';
import { CommandHandler } from "./command_handler";
import { Duplex } from "stream";

export const mouse_position: CommandHandler = async (_args: string[], wsStream: Duplex) => {
    const position = await mouse.getPosition();

    console.debug(`mouse_position ${position.x},${position.y}`);
    wsStream.write(`mouse_position ${position.x},${position.y}`);
}
