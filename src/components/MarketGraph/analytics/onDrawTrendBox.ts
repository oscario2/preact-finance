import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext, lineY } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';

// types
import { IChartState } from '../MarketGraph.types';

/**
 * draw box with mousedown/mouseup
 * @param ref
 * @param state
 * @param moveX
 * @param moveY
 */
export const onDrawTrendBox = (
    ref: Ref<HTMLCanvasElement>,
    state: IChartState,
    moveX: number,
    moveY: number
) => {
    const { ctx } = getCanvasContext(ref);

    const clrLongRGBA20 = getCssColor('--clr-rgba-long-20');
    const clrShortRGBA20 = getCssColor('--clr-rgba-short-20');

    const drawCircle = (x: number, y: number) => {
        ctx.beginPath();
        ctx.strokeStyle = '#cecece';
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.stroke();
    };

    const { drawActive, drawHistory } = state;
    for (const box of [drawActive, ...drawHistory]) {
        if (box.hidden || !box.start) continue;

        const { active, start, end } = box;
        const [x0, y0] = [lineY(start.x), lineY(start.y)];
        const [x1, y1] = [lineY(end.x), lineY(end.y)];

        drawCircle(x0, y0);
        drawCircle(x1, y1);

        // draw, mousedown
        if (active) {
            const [w, h] = [moveX - x0, moveY - y0];
            ctx.fillStyle = h < 0 ? clrLongRGBA20 : clrShortRGBA20;
            ctx.fillRect(x0, y0, w, h);
        }

        // end, mouseup
        else if (!active) {
            const [w, h] = [x0 - x1, y0 - y1];
            ctx.fillStyle = h > 0 ? clrLongRGBA20 : clrShortRGBA20;
            ctx.fillRect(x1, y1, w, h);
        }
    }
};
