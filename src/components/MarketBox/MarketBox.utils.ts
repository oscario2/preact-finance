// utils
import { getMinMaxMarket } from '@utils/data.utils';
import { getDenoted, getNDigits } from '@utils/number.utils';

// types
import { IMarketItem, IMarketSpark } from 'src/types/data.types';
import { EMarketTrend, IMarketTrend } from './MarketBox.types';

/**
 * @param price
 * @param digits amount of digits to round base + decimals to
 */
const getPrice = (price: number, digits: number = 6): string => {
    return getNDigits(price, digits);
};

/**
 * get long/short trend and suffix depending on market start/end
 * @param first first ohlc item in (open) time
 * @param last last ohlc item in (open) time
 * @returns
 */
const getTrend = (first: IMarketSpark, last: IMarketSpark) => {
    const change = ((last.close - first.close) / first.close) * 100;

    const trend = change > 0 ? EMarketTrend.Long : EMarketTrend.Short;
    const percent = `${change > 0 ? '+' : '-'}${Math.abs(change).toFixed(2)}%`;

    return { percent, trend } as IMarketTrend;
};

/**
 * calculate volume and transform to denotion
 * @param items
 * @returns
 */
export const getVolume = (items: IMarketItem[]) => {
    let volume = 0;
    for (let i = 0; i < items.length; i++) {
        volume += items[i].volume;
    }
    return volume;
};

/**
 * process price, color, trend and volume
 * @param items
 */
export const getMarketInfo = (items: IMarketItem[]) => {
    const { minX, maxX } = getMinMaxMarket(items);

    const price = getPrice(maxX.spark.close);
    const volume = getDenoted(getVolume(items));

    const { percent, trend } = getTrend(minX.spark, maxX.spark);
    const color = `var(--clr-${trend})`;

    return { price, volume, percent, trend, color };
};
