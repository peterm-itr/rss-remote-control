import { mouse, left } from '@nut-tree/nut-js';
import { CommandHandler } from "./command_handler";

export const mouse_left: CommandHandler = async (args: string[]) => {
    const step = parseInt(args[0]!, 10);

    await mouse.move(left(step));
}
