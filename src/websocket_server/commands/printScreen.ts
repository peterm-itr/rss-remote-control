import { Region, mouse, screen } from '@nut-tree/nut-js';
import { Duplex } from 'stream';
import { imageToJimp } from '@nut-tree/nut-js/dist/lib/provider/io/imageToJimp.function';
import Jimp from 'jimp';
import { CommandHandler } from './commandHandler';

const GRAB_AREA_WIDTH_HEIGHT = 200;

const getGrabRegion = async (grabWidthHeight: number): Promise<Region> => {
    const delta = Math.round(grabWidthHeight / 2);
    const { x: centerX, y: centerY } = await mouse.getPosition();
    const screenWidth = await screen.width();
    const screenHeight = await screen.height();

    if (centerX < delta || centerY < delta) {
        throw new Error('Grab region out of screen bounds');
    }

    if ((screenWidth - centerX < delta) || (screenHeight - centerY < delta)) {
        throw new Error('Grab region out of screen bounds');
    }

    return new Region(
        centerX - delta,
        centerY - delta,
        grabWidthHeight,
        grabWidthHeight,
    );
};

export const printScreen: CommandHandler = async (_args: string[], wsStream: Duplex): Promise<string> => {
    const image = await screen.grabRegion(getGrabRegion(GRAB_AREA_WIDTH_HEIGHT));

    const jimpImage = imageToJimp(await image.toRGB());
    const imageBuffer = await jimpImage.getBufferAsync(Jimp.MIME_PNG);
    const base64Image = imageBuffer.toString('base64');

    const response = `prnt_scrn ${base64Image}`;
    wsStream.write(response);

    return response;
};
