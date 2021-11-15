import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';

// types
import { IMarketItem } from 'src/types/data.types';

/**
 * draw percentage change between each tick
 * @param items
 * @param itemHover
 */
export const onDrawPChange = (
    ref: Ref<HTMLCanvasElement>,
    items: IMarketItem[],
    itemHover: IMarketItem
) => {
    const { ctx } = getCanvasContext(ref);
    const clrTextStrong = getCssColor('--clr-textStrong');

    let last = items.indexOf(itemHover);
    last = last == 0 ? items.length - 1 : last - 1;

    const lastClose = items[last].spark.close;
    const thisClose = itemHover.spark.close;

    const change = (thisClose - lastClose) / thisClose;
    const format = (change * 100).toFixed(3).padStart(6, '+') + '%';

    ctx.fillStyle = clrTextStrong;
    ctx.fillText(format, 100 * 5, 20);
};
