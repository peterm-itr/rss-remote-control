import { CommandHandler } from './command_handler';
import { mouse_up } from './mouse_up';
import { mouse_right } from './mouse_right';
import { mouse_down } from './mouse_down';
import { mouse_left } from './mouse_left';
import { mouse_position } from './mouse_position';

const noop: CommandHandler = async () => {};

export const getHandler = (commandName: string): CommandHandler => {
    switch (commandName) {
        case 'mouse_up': return mouse_up;
        case 'mouse_right': return mouse_right;
        case 'mouse_down': return mouse_down;
        case 'mouse_left': return mouse_left;
        case 'mouse_position': return mouse_position;
        default: return noop;
    }
}
