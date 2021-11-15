import { IOrderBookItem } from './OrderBook.types';

/**
 * process and group entries
 * @param items items sorted by price
 * @param midPoint or lastTradedPrice
 */
export const setOrderBookInfo = (items: IOrderBookItem[], midPoint: number) => {
    // TODO: add grouping
    const processed = [] as IOrderBookItem[];

    let lastPrice = 0;
    let totalPrice = 0;
    let totalVolume = 0;

    for (let i = 0; i < items.length; i++) {
        let { price, volume, long } = items[i];

        //
        totalPrice += price;
        totalVolume += volume;

        // last and current price
        const lp = lastPrice.toFixed(1).split('');
        const cp = price.toFixed(1).split('');

        // get index to start highlighting
        let hlight = 0;
        for (let i = 0; i < cp.length; i++) {
            if (lp[i] !== cp[i]) {
                hlight = i;
                break;
            }
        }

        // percentage difference from last traded price
        const percent = Math.abs((midPoint - totalPrice) / midPoint);

        processed.push({
            price,
            volume,
            totalPercent: Number(percent.toFixed(8)),
            totalVolume,
            long,
            mirrored: 0,
            // TODO: decide significant dynamically
            significant: volume > 0.15 ?? false,
            hlight,
            index: i
        });

        // update price for next iteration
        lastPrice = price;
    }

    return processed;
};

/**
 * match mirrored entry between 'asks' and 'bids' by 'totalPercent' from 'midPoint'
 * @param asks
 * @param bids
 */
export const setMirrored = (asks: IOrderBookItem[], bids: IOrderBookItem[]) => {
    for (let i = 0; i < asks.length; i++) {
        const a = asks[i];
        for (let j = 0; j < bids.length; j++) {
            const b = bids[i];
            if (a.totalPercent >= b.totalPercent) {
                a.mirrored = b.price;
                b.mirrored = a.price;
            }
        }
    }
};
