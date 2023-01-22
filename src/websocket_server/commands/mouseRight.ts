import { mouse, right } from '@nut-tree/nut-js';
import { CommandHandler } from './commandHandler';

export const mouseRight: CommandHandler = async (args: string[]): Promise<string> => {
    const step = parseInt(args[0]!, 10);

    await mouse.move(right(step));

    return `Moved mouse ${step} px to the right`;
};
