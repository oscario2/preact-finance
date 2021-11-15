export interface IOrderBookItem {
    price: number;
    volume: number;
    long: boolean;

    /**
     * percentage from midpoint (or last traded price)
     * used as Y-axis
     */
    totalPercent: number;

    /**
     * sum of all volumes from midpoint
     * used as X-axis
     */
    totalVolume: number;

    /**
     * opposite IOrderBookItem index e.g in bids if asks
     */
    mirrored: number;

    /**
     * is point singificant / resistence
     */
    significant: boolean;

    /**
     * index of start text highlighting on
     */
    hlight: number;

    /**
     * index in list
     */
    index: number;
}

export interface IOrderBook {
    asks: IOrderBookItem[];
    bids: IOrderBookItem[];
}

export interface IOrderBookState {
    sender: EOrderBookSender;
    book: IOrderBook;
    hover: IOrderBookItem;
    mirrored: number;
}

// actions
export enum EOrderBookAction {
    None,
    AddOrderBook,
    HoverEntry
}

// dispatcher
export enum EOrderBookSender {
    BookAsks,
    BookBids,
    GraphAsks,
    GraphBids
}

// discriminated union type
export type TOrderBookAction =
    | {
          cmd: EOrderBookAction.AddOrderBook;
          sender: EOrderBookSender;
          book: IOrderBook;
      }
    | {
          cmd: EOrderBookAction.HoverEntry;
          sender: EOrderBookSender;
          hover: IOrderBookItem;
      };

// state
export interface IDepthState {
    sender: EOrderBookSender;
    hover: IOrderBookItem;
    depth: IOrderBook;
}
