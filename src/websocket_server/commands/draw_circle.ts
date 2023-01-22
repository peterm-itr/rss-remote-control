import { Button, mouse, straightTo, left, Point } from '@nut-tree/nut-js';
import { CommandHandler } from "./command_handler";

export const draw_circle: CommandHandler = async (args: string[]) => {
    mouse.config.mouseSpeed = 1000;

    const radius = parseInt(args[0]!, 10);
    const {x: centerX, y: centerY} = await mouse.getPosition();

    await mouse.move(left(radius));
    await mouse.pressButton(Button.LEFT);

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        await mouse.move(straightTo(new Point(
            centerX - radius * Math.cos(i),
            centerY - radius * Math.sin(i)
        )));
    }

    await mouse.releaseButton(Button.LEFT);
    await mouse.move(straightTo(new Point(centerX, centerY)));
}
