export interface IQueryTokenHourOhlcReq {
    token: string;
    start: number;
}

export interface IQueryTokenHourOhlcRes {
    tokenHourDatas: {
        periodStartUnix: number;
        high: string;
        open: string;
        low: string;
        close: string;
        totalValueLocked: string;
    }[];
}
