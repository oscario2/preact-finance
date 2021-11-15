import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext, lineY } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';
import { lerp } from '@utils/math.utils';

// types
import { IMarketItem } from 'src/types/data.types';

/**
 * static drawing behind composite
 * @param ctx
 * @param items
 * @param interpolate
 */
export const onDrawGrid = (ref: Ref<HTMLCanvasElement>, ipl: IMarketItem[]) => {
    const { canvas, ctx } = getCanvasContext(ref);
    const clrGuide = getCssColor('--clr-guide');

    // X grid on every 3rd tick
    const drawGridX = () => {
        for (let i = 0; i < ipl.length; i++) {
            // draw mode behind
            ctx.globalCompositeOperation = 'destination-over';
            ctx.setLineDash([2, 2]);

            // every 5th tick
            if (i !== 0 && i % 5 !== 0) continue;
            const { openTime: x } = ipl[i];

            // X: draw horizontal lines on each N'th tick
            ctx.beginPath();

            ctx.moveTo(x, 0);
            ctx.lineTo(x, lineY(canvas.height));

            ctx.lineWidth = 1;
            ctx.strokeStyle = clrGuide;
            ctx.stroke();

            // draw mode front
            ctx.globalCompositeOperation = 'source-over';
            ctx.setLineDash([0, 0]);
        }
    };

    // Y on every 10% of the price
    const drawGridY = () => {
        for (let i = 1; i <= 10; i++) {
            const y = lerp(1, canvas.height - 1, i / 10);

            ctx.globalCompositeOperation = 'destination-over';
            ctx.setLineDash([2, 2]);

            // draw
            ctx.beginPath();

            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, lineY(y));

            ctx.lineWidth = 1;
            ctx.strokeStyle = clrGuide;
            ctx.stroke();

            // stroke behind composite
            ctx.globalCompositeOperation = 'source-over';
            ctx.setLineDash([0, 0]);
        }
    };

    drawGridX();
    drawGridY();
};
