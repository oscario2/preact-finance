import { getOrderBookFormatted } from './mock.utils';

import btcBook from './binance-btcusdt-book';
import { IOrderBook } from '@components/OrderBook/OrderBook.types';
import { EMarketKey, IMockOrderBook } from 'src/types/data.types';

/**
 * https://api.binance.com/api/v3/depth?symbol=BTCUSDT
 */
export const getMockOrderBook = (key: EMarketKey) => {
    const json = key == EMarketKey.BTC ? btcBook : btcBook;
    const { asks, bids }: IMockOrderBook = json;

    return {
        asks: getOrderBookFormatted(asks, false),
        bids: getOrderBookFormatted(bids, true)
    } as IOrderBook;
};
