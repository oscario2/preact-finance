import { createContext, h } from 'preact';
import { useContext, useReducer } from 'preact/hooks';

// actions
import { orderBookReducer } from './OrderBook.reducer';

// types
import { IDispatch } from 'src/types/hook.types';
import { IOrderBookState, TOrderBookAction } from './OrderBook.types';

/**
 * context of dispatcher for store to use
 */
const OrderBookContext = createContext(
    {} as IDispatch<IOrderBookState, TOrderBookAction>
);

const orderBookState = {
    book: {},
    hover: {}
} as IOrderBookState;

/**
 * store allows 'value' to be automatically inherited by any child component
 * @returns
 */
export const OrderBookStore = ({ children }: any) => {
    const [state, dispatch] = useReducer(orderBookReducer, orderBookState);

    const value = { state, dispatch } as IDispatch<
        IOrderBookState,
        TOrderBookAction
    >;

    return (
        <OrderBookContext.Provider value={value}>
            {children}
        </OrderBookContext.Provider>
    );
};

/**
 * the 'useState' of our store
 * @returns
 */
export const useOrderBook = () => {
    const context = useContext(OrderBookContext);
    if (context === undefined) {
        throw new Error('useOrderBook must be used within <OrderBookStore>');
    }
    return context;
};
