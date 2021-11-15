import { h } from 'preact';

// utils
import { setMirrored, setOrderBookInfo } from './OrderBook.utils';

// actions
import { useHover } from './OrderBook.actions';
import { useOrderBook } from './OrderBook.store';

// types
import {
    EOrderBookSender,
    IOrderBook,
    IOrderBookItem
} from './OrderBook.types';

// styles
import './OrderBook.module.scss';

interface IOrderBookItemProps {
    sender: EOrderBookSender;
    item: IOrderBookItem;
    hover: IOrderBookItem;
}

const OrderBookItem = ({ sender, item, hover }: IOrderBookItemProps) => {
    // set events for item
    const events = useHover(sender, item);

    //
    const { price, volume, totalVolume, long, hlight, significant } = item;

    // colors for highlight
    const dim = `clr-${long ? 'long' : 'short'}-fill`;
    const light = `clr-${long ? 'long' : 'short'}-highlight`;

    // info
    const p = price.toFixed(1).split('');
    const v = volume.toFixed(4);
    const tv = totalVolume.toFixed(4);

    // is item our hovered item or it's mirrored opposite
    const isHovered = (hover: IOrderBookItem, price: number) => {
        if (!hover) return false;
        return hover.price === price || hover.mirrored === price;
    };
    const hoverCls = isHovered(hover, price) ? 'order-list-entry--hover' : '';

    // highlight 'significant' volume as 'resistence'
    const sigCls = significant ? 'order-list-entry--significant' : '';

    return (
        <li {...events} className={`order-list-entry ${hoverCls} ${sigCls}`}>
            <div className="order-list-entry-price">
                <span className={dim}>{p.slice(0, hlight).join('')}</span>
                <span className={light}>{p.slice(hlight).join('')}</span>
            </div>

            <div className="order-list-entry-amount">
                <span className="clr-text-strong">{v[0]}</span>
                <span className="clr-text-weak">{v.slice(1)}</span>
            </div>

            <div className="order-list-entry-total-amount">
                <span className="clr-text-weak">{tv[0]}</span>
                <span className="clr-text-strong">{tv.slice(1)}</span>
            </div>
        </li>
    );
};

export const OrderBook = ({ asks, bids }: IOrderBook) => {
    // state only updates (re-render) if a new value is inputted
    const { state } = useOrderBook();

    // sort by ascending or decending price
    asks = asks.sort((a, b) => a.price - b.price);
    bids = bids.sort((a, b) => b.price - a.price);

    // current trading price
    const midPoint = (asks[0].price + bids[0].price) / 2;

    //
    asks = setOrderBookInfo(asks, midPoint).slice(0, 21);
    bids = setOrderBookInfo(bids, midPoint).slice(0, 21);

    //
    setMirrored(asks, bids);

    // TODO: don't mutate state directly, though a dispatch will cause a re-render hence loop
    state.book = { asks: [...asks], bids: [...bids] };

    // to mirror hover
    asks.reverse();

    return (
        <div className="order-book">
            <div className="order-book-list order-book-list--bids">
                <ul>
                    {asks.map(item => {
                        return (
                            <OrderBookItem
                                sender={EOrderBookSender.BookAsks}
                                item={item}
                                hover={state.hover}
                            />
                        );
                    })}
                </ul>
            </div>
            <div className="order-book-last-price">{midPoint}</div>
            <div className="order-book-list order-book-list--asks">
                <ul>
                    {bids.map(item => {
                        return (
                            <OrderBookItem
                                sender={EOrderBookSender.BookBids}
                                item={item}
                                hover={state.hover}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
