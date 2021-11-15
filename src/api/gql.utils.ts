import { EMarketKey, IMarketItem, IMarketState } from 'src/types/data.types';
import { IQueryTokenHourOhlcRes } from './queries/query-token-hour-ohlc';

export const getMarketDataFormatted = (res: IQueryTokenHourOhlcRes) => {
    const items = [] as IMarketItem[];

    res.tokenHourDatas.forEach((entry, index) => {
        const { open, high, low, close } = entry;

        const item = {
            index,
            openTime: entry.periodStartUnix * 1000,
            volume: Number(entry.totalValueLocked),
            spark: {
                open: Number(open),
                high: Number(high),
                low: Number(low),
                close: Number(close)
            }
        } as IMarketItem;

        items.push(item);
    });

    return items;
};

export const getStateFromAddress = (address: string) => {
    switch (address) {
        case '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599':
            return {
                key: EMarketKey.BTC,
                name: 'Bitcoin',
                rank: 1,
                items: {} as IMarketItem[]
            } as IMarketState;

        case '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
            return {
                key: EMarketKey.ETH,
                name: 'Ethereum',
                rank: 2,
                items: {} as IMarketItem[]
            } as IMarketState;
    }

    return {} as IMarketState;
};
