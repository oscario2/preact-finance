import { Ref } from 'preact/hooks';

// components
import { onDrawMinMax } from '../analytics/onDrawMinMax';
import { onDrawTrendBox as onDrawTrendBox } from '../analytics/onDrawTrendBox';
import { onDrawCross } from '../info/onDrawCross';
import { onDrawGrid } from '../info/onDrawGrid';
import { onDrawInfo } from '../info/onDrawInfo';
import { onDrawPChange } from '../info/onDrawPChange';

// utils
import { getCanvasContext } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';
import { getHoverMarket, getIplMarket } from '@utils/data.utils';

// types
import { IMarketItem } from 'src/types/data.types';
import { IChartState } from '../MarketGraph.types';

export const onDrawCandle = (
    ref: Ref<HTMLCanvasElement>,
    state: IChartState,
    items: IMarketItem[],

    moveX: number = 0,
    moveY: number = 0
) => {
    const { canvas, ctx } = getCanvasContext(ref);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const clrShort = getCssColor('--clr-short');
    const clrLong = getCssColor('--clr-long');

    // interpolate items to fit canvas frame
    const { ipl, minX, maxX } = getIplMarket(
        canvas.height,
        canvas.width,
        items
    );

    // keep reference of ids
    const iplMap = {} as Record<number, IMarketItem>;
    ipl.forEach(k => (iplMap[k.index] = k));

    // draw analytics
    onDrawTrendBox(ref, state, moveX, moveY);
    onDrawMinMax(ref, minX, maxX, iplMap);

    //
    const drawCandle = (item: IMarketItem) => {
        const { openTime: x } = item;
        const { open, high, low, close } = item.spark;
        ctx.strokeStyle = open < close ? clrShort : clrLong;

        // thin H/L
        ctx.beginPath();

        ctx.moveTo(x, high);
        ctx.lineTo(x, low);

        ctx.lineWidth = 1;
        ctx.stroke();

        // thick O/C
        ctx.beginPath();

        ctx.moveTo(x, open);
        ctx.lineTo(x, close);

        ctx.lineWidth = 5;
        ctx.stroke();
    };

    for (let i = 0; i < ipl.length; i++) {
        // draw
        drawCandle(ipl[i]);
    }

    const { iplHover, itemHover } = getHoverMarket(moveX, ipl, items);

    onDrawCross(ref, iplHover, moveY);
    onDrawInfo(ref, itemHover);

    onDrawGrid(ref, ipl);
    onDrawPChange(ref, items, itemHover);
};
