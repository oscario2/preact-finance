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

export const onDrawMountain = (
    ref: Ref<HTMLCanvasElement>,
    state: IChartState,
    items: IMarketItem[],

    moveX: number = 0,
    moveY: number = 0
) => {
    const { canvas, ctx } = getCanvasContext(ref);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const clrCtaHighlight80 = getCssColor('--clr-rgba-ctaHighlight-80');
    const clrCtaHighlight0 = getCssColor('--clr-rgba-ctaHighlight-0');

    // interpolate items to fit canvas frame
    const { ipl, minX, maxX } = getIplMarket(
        canvas.height,
        canvas.width,
        items
    );

    // keep reference of ids to share between "items" and "ipl"
    const iplMap = {} as Record<number, IMarketItem>;
    ipl.forEach(it => (iplMap[it.index] = it));

    // draw analytics
    onDrawTrendBox(ref, state, moveX, moveY);
    onDrawMinMax(ref, minX, maxX, iplMap);

    //
    const drawLine = (item: IMarketItem, first?: boolean) => {
        const {
            openTime: x,
            spark: { close: y }
        } = item;

        if (first) ctx.moveTo(x, y);
        ctx.lineTo(x, y);
    };

    ipl.forEach((it, i) => {
        // draw start
        if (i == 0) {
            ctx.beginPath();
            drawLine(it, true);
            return;
        }

        //
        drawLine(it);

        // draw end
        if (i == ipl.length - 1) {
            // stroke chart line
            ctx.strokeStyle = '#eee';
            ctx.lineWidth = 1;
            ctx.stroke();

            // draw the missing parts
            ctx.lineTo(iplMap[maxX.index].openTime, canvas.height); // bottom-right
            ctx.lineTo(iplMap[minX.index].openTime, canvas.height); // bottom-left

            // draw behind
            ctx.globalCompositeOperation = 'destination-over';

            // gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0.05, clrCtaHighlight80);
            gradient.addColorStop(1.0, clrCtaHighlight0);

            ctx.fillStyle = gradient;
            ctx.fill();

            // composite to front
            ctx.globalCompositeOperation = 'source-over';
        }
    });

    const { iplHover, itemHover } = getHoverMarket(moveX, ipl, items);

    onDrawCross(ref, iplHover, moveY);
    onDrawInfo(ref, itemHover);

    onDrawGrid(ref, ipl);
    onDrawPChange(ref, items, itemHover);
};
