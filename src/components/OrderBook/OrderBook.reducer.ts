import {
    EOrderBookAction,
    IOrderBookState,
    TOrderBookAction
} from './OrderBook.types';

/**
 * updates any component listening to this reducer
 * do not mutate the state directly
 */
export const orderBookReducer = (
    state: IOrderBookState,
    action: TOrderBookAction
): IOrderBookState => {
    const { sender } = action;

    switch (action.cmd) {
        case EOrderBookAction.HoverEntry:
            const { hover } = action;
            return { ...state, sender, hover };

        case EOrderBookAction.AddOrderBook:
            const { book } = action;
            return { ...state, sender, book };
    }
};
