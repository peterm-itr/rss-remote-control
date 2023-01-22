import { mouse, left } from '@nut-tree/nut-js';
import { CommandHandler } from './commandHandler';

export const mouseLeft: CommandHandler = async (args: string[]): Promise<string> => {
    const step = parseInt(args[0]!, 10);

    await mouse.move(left(step));

    return `Moved mouse ${step} px to the left`;
};
