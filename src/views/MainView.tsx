import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// components
import { MarketBox } from '@components/MarketBox/MarketBox';
import { MarketChart } from '@components/MarketGraph/MarketGraph';
import { OrderBook } from '@components/OrderBook/OrderBook';
import {
    OrderBookStore,
    useOrderBook
} from '@components/OrderBook/OrderBook.store';
import { AxisGraph } from '@components/OrderBook/graphs/axis/AxisGraph';
import { DepthGraph } from '@components/OrderBook/graphs/depth/DepthGraph';

// data
import { getMockOrderBook } from 'src/mock';
import { GqlQuery } from '@api/gql.query';

// types
import { IOrderBook } from '@components/OrderBook/OrderBook.types';
import { EMarketKey, IMarketState } from 'src/types/data.types';

// styles
import './MainView.module.scss';

export const MainView = () => {
    const [marketState, useMarketStates] = useState(
        {} as Record<EMarketKey, IMarketState>
    );

    const [bookState, useBookStates] = useState(
        {} as Record<EMarketKey, IOrderBook>
    );

    const onLoadOrderBookData = async () => {
        const state: Record<EMarketKey, IOrderBook> = {
            [EMarketKey.BTC]: await getMockOrderBook(EMarketKey.BTC),
            [EMarketKey.ETH]: await getMockOrderBook(EMarketKey.ETH)
        };
        useBookStates(state);
    };

    const onQueryLocalStorage = async (
        address: string,
        name: string,
        start: number
    ) => {
        const query = new GqlQuery();
        const key = `market-data-${name}`;

        if (!localStorage.hasOwnProperty(key)) {
            const data = await query.getTokenHourlyOHLC({
                token: address,
                start
            });
            localStorage.setItem(key, JSON.stringify(data));
        }

        return JSON.parse(localStorage.getItem(key) as string);
    };

    const onQueryTokenData = async () => {
        // 4 days
        const start = Math.round(
            (new Date().getTime() - 24 * 4 * 60 * 60 * 1000) / 1000
        );

        const state: Record<EMarketKey, IMarketState> = {
            [EMarketKey.BTC]: await onQueryLocalStorage(
                '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
                'btc',
                start
            ),
            [EMarketKey.ETH]: await onQueryLocalStorage(
                '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
                'eth',
                start
            )
        };
        useMarketStates(state);
    };

    // on mount
    useEffect(() => {
        // onLoadMarketData();
        onLoadOrderBookData();
        onQueryTokenData();
    }, []);

    // loading
    if (!Object.keys(marketState).length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="orderbook-component">
                <OrderBookStore>
                    <OrderBook
                        asks={bookState.BTC.asks}
                        bids={bookState.BTC.bids}
                    />
                    <div className="depth-chart-grid">
                        <div className="depth-combo">
                            <DepthGraph long={false} />
                            <AxisGraph long={false} />
                        </div>
                        <div className="depth-combo">
                            <DepthGraph long={true} />
                            <AxisGraph long={true} />
                        </div>
                    </div>
                </OrderBookStore>
            </div>

            <div className="market-box-grid">
                <MarketBox state={marketState.BTC} />
                <MarketBox state={marketState.ETH} />
            </div>
            <MarketChart items={marketState.BTC.items} />
        </div>
    );
};
