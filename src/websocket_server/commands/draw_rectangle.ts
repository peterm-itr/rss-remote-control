import { Button, mouse, right, down, left, up } from '@nut-tree/nut-js';
import { CommandHandler } from "./command_handler";

export const draw_rectangle: CommandHandler = async (args: string[]) => {
    mouse.config.mouseSpeed = 500;

    const width = parseInt(args[0]!, 10);
    const height = parseInt(args[1]!, 10);

    await mouse.pressButton(Button.LEFT);

    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height));

    await mouse.releaseButton(Button.LEFT);
}
