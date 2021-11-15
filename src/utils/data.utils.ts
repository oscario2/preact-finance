import { IOrderBookItem } from '@components/OrderBook/OrderBook.types';
import { IMarketItem, IMarketSpark } from 'src/types/data.types';
import { lineY } from './canvas.utils';
import { range } from './math.utils';

/**
 * get min/max for X/Y
 * @param items
 * @returns
 */
export const getMinMaxMarket = (items: IMarketItem[]) => {
    let minX = items[0];
    let maxX = items[0];

    let minY = items[0];
    let maxY = items[0];

    for (const item of items) {
        if (maxX.openTime < item.openTime) maxX = item;
        if (minX.openTime > item.openTime) minX = item;

        if (maxY.spark.close < item.spark.close) maxY = item;
        if (minY.spark.close > item.spark.close) minY = item;
    }

    return { minX, maxX, minY, maxY };
};

/**
 * interpolate data to fit frame
 * @param height height to fit into
 * @param width width to fit into
 * @param items items to fit
 */
export const getIplMarket = (
    height: number,
    width: number,
    items: IMarketItem[]
) => {
    const { minX, maxX, minY, maxY } = getMinMaxMarket(items);

    const padX = 0;
    const padY = 0;

    const ipl = items.map(item => {
        const fit = { ...item }; // shallow copy
        fit.spark = { ...item.spark }; // shallow copy

        // fit 'x'
        const x = range(
            minX.openTime,
            maxX.openTime,
            padX,
            width - padX,
            item.openTime
        );
        fit.openTime = lineY(x);

        // fit 'y'
        Object.keys(fit.spark).forEach(spark => {
            const key = spark as keyof IMarketSpark;

            // interpolate
            const y = range(
                minY.spark.low,
                maxY.spark.high,
                padY,
                height - padY,
                item.spark[key]
            );

            // invert Y for chart to trend in the right direction
            fit.spark[key] = lineY(height - y);
        });

        return fit;
    }) as IMarketItem[];

    return { ipl, minX, maxX, minY, maxY };
};

/**
 *  * which item is closest to our mouse position
 * @param moveX
 * @param ipl
 * @param items
 * @returns
 */
export const getHoverMarket = (
    moveX: number,
    ipl: IMarketItem[],
    items: IMarketItem[]
) => {
    let iplHover = ipl[0];
    let itemHover = items[0];

    for (let i = 0; i < ipl.length; i++) {
        const distanceA = Math.abs(moveX - ipl[i].openTime);
        const distanceB = Math.abs(moveX - iplHover.openTime);

        if (distanceA < distanceB) {
            iplHover = ipl[i];
            itemHover = items[i];
        }
    }

    return { iplHover, itemHover };
};

/**
 * get min/max of x/y
 * @param items
 * @returns
 */
const getMinMaxOrderBook = (items: IOrderBookItem[]) => {
    let minX = items[0];
    let maxX = items[0];

    let minY = items[0];
    let maxY = items[0];

    for (const item of items) {
        if (maxX.totalVolume < item.totalVolume) maxX = item;
        if (minX.totalVolume > item.totalVolume) minX = item;

        if (maxY.totalPercent < item.totalPercent) maxY = item;
        if (minY.totalPercent > item.totalPercent) minY = item;
    }

    return { minX, maxX, minY, maxY };
};

/**
 * interpolate data to fit frame
 * @param height
 * @param width
 * @param items
 * @returns
 */
export const getIplOrderBook = (
    height: number,
    width: number,
    items: IOrderBookItem[]
) => {
    //
    const { minX, maxX, minY, maxY } = getMinMaxOrderBook(items);

    const ipl = items.map(item => {
        const fit = { ...item }; // shallow copy

        // fit 'x'
        const x = range(
            minX.totalVolume,
            maxX.totalVolume,
            0,
            width,
            item.totalVolume
        );
        fit.totalVolume = lineY(x);

        // fit 'y'
        const y = range(
            minY.totalPercent,
            maxY.totalPercent,
            0,
            height,
            item.totalPercent
        );
        fit.totalPercent = lineY(y);

        return fit;
    }) as IOrderBookItem[];

    return { ipl, minX, maxX, minY, maxY };
};

/**
 * which items is closest to our mouse position
 * @param moveY
 * @param ipl
 * @param items
 * @returns
 */
export const getHoverOrderBook = (
    moveY: number,
    ipl: IOrderBookItem[],
    items: IOrderBookItem[]
) => {
    let iplHover = ipl[0];
    let itemHover = items[0];

    for (let i = 0; i < ipl.length; i++) {
        const distanceA = Math.abs(moveY - ipl[i].totalPercent);
        const distanceB = Math.abs(moveY - iplHover.totalPercent);

        if (distanceA < distanceB) {
            iplHover = ipl[i];
            itemHover = items[i];
        }
    }

    return { iplHover, itemHover };
};
