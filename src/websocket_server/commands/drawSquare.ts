import {
    Button, mouse, right, down, left, up,
} from '@nut-tree/nut-js';
import { CommandHandler } from './commandHandler';

export const drawSquare: CommandHandler = async (args: string[]): Promise<string> => {
    mouse.config.mouseSpeed = 1000;

    const width = parseInt(args[0]!, 10);

    await mouse.pressButton(Button.LEFT);

    await mouse.move(right(width));
    await mouse.move(down(width));
    await mouse.move(left(width));
    await mouse.move(up(width));

    await mouse.releaseButton(Button.LEFT);

    return `Drawn a square ${width} by ${width} px`;
};
