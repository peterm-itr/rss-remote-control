import {
    Button, mouse, straightTo, left, Point,
} from '@nut-tree/nut-js';
import { CommandHandler } from './commandHandler';

export const drawCircle: CommandHandler = async (args: string[]): Promise<string> => {
    mouse.config.mouseSpeed = 1000;

    const radius = parseInt(args[0]!, 10);
    const { x: centerX, y: centerY } = await mouse.getPosition();

    await mouse.move(left(radius));
    await mouse.pressButton(Button.LEFT);

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        // @eslint-disable-next-line no-await-in-loop
        await mouse.move(straightTo(new Point(
            centerX - radius * Math.cos(i),
            centerY - radius * Math.sin(i),
        )));
    }

    await mouse.releaseButton(Button.LEFT);
    await mouse.move(straightTo(new Point(centerX, centerY)));

    return `Drawn a circle with ${radius}px radius`;
};
