export type TGraphCmd = 'tokenHourDatas';

export interface IGqlRequest<T> {
    operationName: string;
    query: string;
    variables: T;
}

export interface IGqlResponse<T> {
    data: T;
}
