import { IOrderBookItem } from '@components/OrderBook/OrderBook.types';

/**
 * format 'raw' orderbook data
 * @param items
 * @param long
 * @returns
 */
export const getOrderBookFormatted = (items: string[][], long?: boolean) => {
    return items.map(item => {
        const toNum = item.map(k => Number(k));
        const [price, volume] = toNum;

        return { price, volume, long } as IOrderBookItem;
    }) as IOrderBookItem[];
};
