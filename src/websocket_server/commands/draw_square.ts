import { Button, mouse, right, down, left, up } from '@nut-tree/nut-js';
import { CommandHandler } from "./command_handler";

export const draw_square: CommandHandler = async (args: string[]) => {
    mouse.config.mouseSpeed = 1000;

    const width = parseInt(args[0]!, 10);

    await mouse.pressButton(Button.LEFT);

    await mouse.move(right(width));
    await mouse.move(down(width));
    await mouse.move(left(width));
    await mouse.move(up(width));

    await mouse.releaseButton(Button.LEFT);

}
