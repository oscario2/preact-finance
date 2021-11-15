import { Ref } from 'preact/hooks';

// utils
import { getCanvasContext } from '@utils/canvas.utils';
import { getCssColor } from '@utils/color.utils';

// types
import { IMarketItem, IMarketSpark } from 'src/types/data.types';

export const onDrawInfo = (ref: Ref<HTMLCanvasElement>, hover: IMarketItem) => {
    // if (moveX == 0 && moveY == 0) return;
    const { ctx } = getCanvasContext(ref);

    const clrTextWeak = getCssColor('--clr-textWeak');
    const clrTextStrong = getCssColor('--clr-textStrong');

    // time of tick
    const drawTime = () => {
        const ts = new Date(hover.openTime).toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        const { width } = ctx.measureText(ts);

        ctx.fillStyle = '#cecece';
        ctx.font = '12px Hack, monospace';
        ctx.fillText(ts, 0, 20);

        return width;
    };
    const timeWidth = drawTime();

    // ohlc bar info
    const drawInfoBar = () => {
        ctx.font = '12px Hack, monospace';
        let infoWidth = 0;

        // pad N px from time
        Object.keys(hover.spark).forEach(k => {
            const key = k as keyof IMarketSpark;
            const prefix = k[0].toUpperCase();

            const value = Math.round(hover.spark[key]).toString();
            const line = prefix + value;

            infoWidth += ctx.measureText(line).width + 15;

            ctx.fillStyle = clrTextWeak;
            ctx.fillText(prefix, infoWidth + timeWidth, 20);

            ctx.fillStyle = clrTextStrong;
            ctx.fillText(value, infoWidth + timeWidth + 10, 20);
        });
    };
    drawInfoBar();
};
