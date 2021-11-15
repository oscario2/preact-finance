export enum EMarketTrend {
    Long = 'long',
    Short = 'short'
}

export interface IMarketTrend {
    percent: string;
    trend: EMarketTrend;
}
