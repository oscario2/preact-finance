import { httpPost } from '@utils/http.utils';
import { IGqlRequest, IGqlResponse, TGraphCmd } from './gql.types';

export abstract class GqlApi {
    /**
     * is $var object
     */
    protected isObject(v: unknown): boolean {
        return (
            typeof v == 'object' &&
            !(v instanceof Date) &&
            !Array.isArray(v) &&
            !(v instanceof RegExp)
        );
    }

    /**
     * map each #var in SDL
     * @param query
     * @param vars
     */
    protected process(query: string, vars: Record<string, any>): string {
        for (const k of Object.keys(vars || {})) {
            if (!vars || !vars[k]) continue;

            // resolve nested objects recursively
            if (this.isObject(vars[k])) {
                return this.process(query, vars[k]);
            }

            // map #var to value
            const v = vars[k];
            query = query.replace('#' + k, typeof v == 'string' ? `"${v}"` : v);
        }

        return query;
    }

    /**
     * pre-process SDL input before sending to HTTP
     * @param query SDL string
     * @param vars #var mapping as object
     */
    protected async request<T, TR>(query: string, vars?: T) {
        query = this.process(query, vars || {});
        query = query.replace(/[\s\n]+/g, ' ');

        const req = {
            query
        } as IGqlRequest<T>;

        return await httpPost<IGqlResponse<TR>>(
            'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph',
            req
        );
    }
}
