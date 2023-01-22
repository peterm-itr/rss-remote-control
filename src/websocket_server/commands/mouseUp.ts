import { mouse, up } from '@nut-tree/nut-js';
import { CommandHandler } from './commandHandler';

export const mouseUp: CommandHandler = async (args: string[]): Promise<string> => {
    const step = parseInt(args[0]!, 10);

    await mouse.move(up(step));

    return `Moved mouse ${step} px up`;
};
