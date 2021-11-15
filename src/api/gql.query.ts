import { EMarketKey, IMarketState } from 'src/types/data.types';
import { GqlApi } from './gql.api';
import { getMarketDataFormatted, getStateFromAddress } from './gql.utils';
import {
    IQueryTokenHourOhlcReq,
    IQueryTokenHourOhlcRes
} from './queries/query-token-hour-ohlc';

export class GqlQuery extends GqlApi {
    public async getTokenHourlyOHLC(vars: IQueryTokenHourOhlcReq) {
        const query =
            // TODO: make one line of this
            `
        {
            tokenHourDatas(
              first: 100
              skip: 0
              where: {
                  token: #token, 
                  periodStartUnix_gt: #start
              }    
              orderBy: periodStartUnix
              orderDirection: asc
          ) { 
              periodStartUnix
              high
              low
              open
              close
              totalValueLocked
          }  
        }`;

        //
        const res = await this.request<
            IQueryTokenHourOhlcReq,
            IQueryTokenHourOhlcRes
        >(query, vars);

        //
        const state = getStateFromAddress(vars.token);
        state.items = getMarketDataFormatted(res.data);

        return state;
    }
}
