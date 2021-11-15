import { useMemo } from 'preact/hooks';

// actions
import { useOrderBook } from './OrderBook.store';

// types
import {
    EOrderBookAction,
    EOrderBookSender,
    IOrderBookItem
} from './OrderBook.types';

export const useHover = (sender: EOrderBookSender, item: IOrderBookItem) => {
    const { dispatch } = useOrderBook();

    const events = useMemo(
        () => ({
            onMouseOver() {
                dispatch({
                    cmd: EOrderBookAction.HoverEntry,
                    sender,
                    hover: item
                });
            }
        }),
        []
    );

    return events;
};
