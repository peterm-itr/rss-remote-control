import { CommandHandler } from './commandHandler';
import { mouseUp } from './mouseUp';
import { mouseRight } from './mouseRight';
import { mouseDown } from './mouseDown';
import { mouseLeft } from './mouseLeft';
import { mousePosition } from './mousePosition';
import { drawCircle } from './drawCircle';
import { drawSquare } from './drawSquare';
import { drawRectangle } from './drawRectangle';
import { printScreen } from './printScreen';

const noop: CommandHandler = async () => {};

export const getHandler = (commandName: string): CommandHandler => {
    switch (commandName) {
        case 'mouse_up': return mouseUp;
        case 'mouse_right': return mouseRight;
        case 'mouse_down': return mouseDown;
        case 'mouse_left': return mouseLeft;
        case 'mouse_position': return mousePosition;
        case 'draw_circle': return drawCircle;
        case 'draw_square': return drawSquare;
        case 'draw_rectangle': return drawRectangle;
        case 'prnt_scrn': return printScreen;
        default: return noop;
    }
};
