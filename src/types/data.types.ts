export enum EMarketKey {
    BTC = 'BTC',
    ETH = 'ETH'
}

export interface IMarketSpark {
    open: number;
    high: number;
    low: number;
    close: number;
}

export interface IMarketItem {
    index: number;
    openTime: number;
    volume: number;
    spark: IMarketSpark;
}

export interface IMarketState {
    key: EMarketKey;
    name: string;
    rank: number;
    items: IMarketItem[];
}

export interface IMockOrderBook {
    lastUpdateId: number;
    bids: string[][];
    asks: string[][];
}
