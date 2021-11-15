import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext } from '@utils/canvas.utils';

// types
import { IMarketItem } from 'src/types/data.types';
import { clamp } from '@utils/math.utils';

/**
 * draw min/max at their corresponding tick
 * @param ref
 * @param min non-ipl min
 * @param max non-ipl max
 * @param ipl
 */
export const onDrawMinMax = (
    ref: Ref<HTMLCanvasElement>,
    min: IMarketItem,
    max: IMarketItem,
    ipl: Record<number, IMarketItem>
) => {
    const { canvas, ctx } = getCanvasContext(ref);

    // min, max for non-interpolated items
    [min, max].forEach((item, i) => {
        const isMax = i > 0;
        const fit = ipl[item.index];

        const price = isMax ? item.spark.high : item.spark.low;
        const priceStr = Math.round(price).toString();
        const { width: textWidth } = ctx.measureText(priceStr);

        const padX = 5;
        const padY = canvas.height * 0.1;

        let x = fit.openTime;
        x = clamp(x, padX, canvas.width - textWidth - padX);

        let y = fit.spark.close;
        y = clamp(isMax ? y + padY : y - padY, 5, canvas.height);

        ctx.fillStyle = '#fff';
        ctx.font = '12px Hack, monospace';

        // use clamp for 0 + 5 to end - 5, for both x and y
        ctx.fillText(Math.round(price).toString(), x, y);
    });
};
