import { mouse, down } from '@nut-tree/nut-js';
import { CommandHandler } from './commandHandler';

export const mouseDown: CommandHandler = async (args: string[]): Promise<string> => {
    const step = parseInt(args[0]!, 10);

    await mouse.move(down(step));

    return `Moved mouse ${step} px down`;
};
