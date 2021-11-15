import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext, lineY } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';

// types
import { IMarketItem } from 'src/types/data.types';

/**
 * draw crosshair around hovered interpolated item (snaps to X)
 * @param ref
 * @param iplHover
 * @param moveY
 */
export const onDrawCross = (
    ref: Ref<HTMLCanvasElement>,
    iplHover: IMarketItem,
    moveY: number
) => {
    if (moveY == 0) return;

    const { canvas, ctx } = getCanvasContext(ref);
    const { height, width } = canvas;

    const clrTextBg40 = getCssColor('--clr-text-bg-40');

    // crosshair jumps and snaps between each X bar
    const x = iplHover.openTime;
    const y = lineY(moveY);

    ctx.beginPath();

    // mid-bot
    ctx.moveTo(x, y);
    ctx.lineTo(x, lineY(height));

    // mid-left
    ctx.moveTo(x, y);
    ctx.lineTo(0, y);

    // mid-top
    ctx.moveTo(x, y);
    ctx.lineTo(x, 0);

    // mid-right
    ctx.moveTo(x, y);
    ctx.lineTo(width, y);

    ctx.strokeStyle = clrTextBg40;
    ctx.lineWidth = 1;
    ctx.stroke();
};
