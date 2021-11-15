import { IMarketItem } from 'src/types/data.types';

/**
 * sliding window moving avg
 * @param items
 * @param range size of window
 */
export const onDrawMovingAvg = (items: IMarketItem[], range: number) => {
    const vals: number[] = [];

    // O(n^2)
    for (let i = 0; i < items.length; i++) {
        if (!items[i + range - 1]) break;

        let sum = 0;
        for (let j = 0; j < range; j++) {
            sum += items[i + j].spark.close;
        }
        vals.push(sum / range);
    }

    return vals;
};
