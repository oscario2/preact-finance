import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext, lineY } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';
import { getHoverOrderBook, getIplOrderBook } from '@utils/data.utils';

// types
import { IOrderBookItem } from '../../OrderBook.types';

/**
 *
 * @param ref
 * @param items non-interpolated items
 * @param moveY mouseY coordinate
 * @param hover interpolated hovered item of opposite axis
 * @param invert invert hover
 * @returns
 */
export const onDrawAxis = (
    ref: Ref<HTMLCanvasElement>,
    items: IOrderBookItem[],
    moveY: number = 0,
    hover: IOrderBookItem = {} as IOrderBookItem,
    invert: boolean = false
) => {
    const {
        canvas: { height, width },
        ctx
    } = getCanvasContext(ref);
    ctx.clearRect(0, 0, width, height);

    const clrLong = getCssColor('--clr-long');
    const clrShort = getCssColor('--clr-short');
    const clrLongBg50 = getCssColor('--clr-long-bg-50');
    const clrShortBg50 = getCssColor('--clr-short-bg-50');
    const clrRgbaBg50 = getCssColor('--clr-rgba-bg-50');

    /**
     * draw X lines with significant volumes
     * @param ipl
     * @param items
     */
    const drawSignificant = (
        ipl: IOrderBookItem[],
        items: IOrderBookItem[]
    ) => {
        ctx.beginPath();
        ctx.setLineDash([2, 2]);

        ctx.lineCap = 'round';
        ctx.lineWidth = 1;

        for (let i = 0; i < items.length; i++) {
            if (!ipl[i].significant) continue;
            const { totalVolume: x, totalPercent: y, long } = ipl[i];

            // line (relative to direction 'long')
            ctx.moveTo(0.5, y);
            ctx.lineTo(long ? width - x : x, lineY(y));

            ctx.strokeStyle = long ? clrLongBg50 : clrShortBg50;
            ctx.stroke();

            // hyphen

            // text
        }

        ctx.stroke();
        ctx.setLineDash([0, 0]);
    };

    /**
     * draw 90* X/Y axis from mouse position
     * @param items
     * @returns
     */
    const drawAxis = (items: IOrderBookItem[]) => {
        // interpolate items to fit canvas frame
        const { ipl } = getIplOrderBook(height, width, items);

        let iplHover = {} as IOrderBookItem;

        // hover sent from state
        if (Object.keys(hover).length) {
            // opposite axis dispatched
            if (invert) iplHover = ipl[ipl.length - 1 - hover.index];
            else iplHover = ipl[hover.index];
        }

        // closest to our mouse position
        if (!iplHover.index)
            iplHover = getHoverOrderBook(moveY, ipl, items).iplHover;

        // which direction
        const { long } = items[0];

        // height or 0 depending on direction
        const thisX = width - iplHover.totalVolume;
        const thisY = iplHover.totalPercent;

        //
        drawSignificant(ipl, items);

        /**
         * draw dashed lined relative to the mouse position
         * @param x
         * @param y
         * @param long
         */
        const drawAxisLine = (x: number, y: number, long?: boolean) => {
            ctx.beginPath();
            ctx.setLineDash([2, 2]);

            ctx.lineCap = 'round';
            ctx.lineWidth = 1;
            ctx.strokeStyle = long ? clrLong : clrShort;

            // direction
            x = long ? x : width - x;

            // from current to mid-point
            ctx.moveTo(x, y);
            ctx.lineTo(x, long ? 0.5 : height);

            // from current to left side
            ctx.moveTo(x, y);
            ctx.lineTo(0.5, y);

            ctx.stroke();
            ctx.setLineDash([0, 0]);
        };
        drawAxisLine(thisX, thisY, long);

        /**
         * draw circles at the dashed line connector
         * @param x
         * @param y
         * @param long
         */
        const drawCircle = (x: number, y: number, long?: boolean) => {
            ctx.beginPath();

            // direction
            x = long ? x : width - x;

            ctx.lineWidth = 3;
            ctx.fillStyle = long ? clrLong : clrShort;
            ctx.arc(x, y, 3, 0, 2 * Math.PI);

            ctx.fill();
        };
        drawCircle(thisX, thisY, long);

        /**
         * draw shaded box below or above
         * @param x
         * @param y
         * @param long
         */
        const drawShade = (x: number, y: number, long?: boolean) => {
            ctx.beginPath();

            if (long) {
                // move to sidebar
                ctx.moveTo(width, y);
                // bottom-right
                ctx.lineTo(width, lineY(height));
                // bottom-left
                ctx.lineTo(0, lineY(height));
                // up to key
                ctx.lineTo(0, y);
            } else {
                // move to sidebar
                ctx.moveTo(width, y);
                // top-right
                ctx.lineTo(width, 0);
                // top-left
                ctx.lineTo(0, 0);
                // down to key
                ctx.lineTo(0, y);
            }

            ctx.fillStyle = clrRgbaBg50;
            ctx.fill();
        };
        drawShade(thisX, thisY, long);

        // return hovered 'item'
        // TODO: return mirrored if 'long'

        return iplHover;
    };

    return drawAxis(items);
};
