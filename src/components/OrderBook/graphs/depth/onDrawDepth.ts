import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';
import { getHoverOrderBook, getIplOrderBook } from '@utils/data.utils';

// types
import { IOrderBookItem } from '../../OrderBook.types';

export const onDrawDepth = (
    ref: Ref<HTMLCanvasElement>,
    items: IOrderBookItem[],
    moveX: number = 0
) => {
    let {
        canvas: { height, width },
        ctx
    } = getCanvasContext(ref);

    ctx.clearRect(0, 0, width, height);

    const clrShort = getCssColor('--clr-short');
    const clrLong = getCssColor('--clr-long');
    const clrShortBg20 = getCssColor('--clr-short-bg-20');
    const clrLongBg20 = getCssColor('--clr-long-bg-20');

    // TODO: adjust coordinates to fit on 'upper' or 'lower' axis
    const drawDepth = (items: IOrderBookItem[]) => {
        // interpolate items to fit canvas frame
        const { ipl } = getIplOrderBook(height, width, items);
        const { iplHover } = getHoverOrderBook(moveX, ipl, items);

        //
        const { long } = items[0];

        //
        for (let i = 0; i < ipl.length; i++) {
            // unknown destination on first iteration
            if (i == 0) continue;

            // assign
            const last = ipl[i - 1];
            const next = ipl[i];

            let lastX = last.totalVolume;
            let nextX = next.totalVolume;

            let lastY = last.totalPercent;
            let nextY = next.totalPercent;

            // if 'long' we need to climb in opposite direction
            if (long) {
                lastX = width - lastX;
                nextX = width - nextX;
            }

            // start
            ctx.beginPath();
            ctx.lineCap = 'round';

            // move to x0 (amount), y0 (% in price change)
            ctx.moveTo(lastX, lastY);
            // step out to (x1, y0)
            ctx.lineTo(nextX, lastY);
            // draw to (x1, y1)
            ctx.lineTo(nextX, nextY);

            // draw
            ctx.lineWidth = 1;
            ctx.strokeStyle = long ? clrLong : clrShort;
            ctx.stroke();

            // stroke behind composite
            ctx.globalCompositeOperation = 'destination-over';

            // draw to end to prepare for fill
            long
                ? ctx.lineTo(height, height) // or (0, 0)
                : ctx.lineTo(height, 0); // or (0, height)

            // stroke to remove our filled edges; to visualize, change strokeStyle
            ctx.fillStyle = long ? clrLongBg20 : clrShortBg20;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.stroke();

            // fill the space between each line
            ctx.fill();

            // back to front of composite
            ctx.globalCompositeOperation = 'source-over';

            // done with line
            ctx.closePath();
        }

        // return item hovered
        return iplHover;
    };

    return drawDepth(items);
};
