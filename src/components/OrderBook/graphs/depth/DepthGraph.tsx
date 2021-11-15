import { h } from 'preact';
import { useMemo, useRef } from 'preact/hooks';

// components
import { Canvas } from '@components/Canvas/Canvas';
import { ICanvasEvents } from '@components/Canvas/Canvas.types';
import { onDrawDepth } from './onDrawDepth';

// utils
import { getCanvasContext, getCanvasPos } from '@utils/canvas.utils';

// types
import { useOrderBook } from '../../OrderBook.store';
import {
    EOrderBookAction,
    EOrderBookSender,
    IOrderBookItem
} from '../../OrderBook.types';

export interface IDepthGraphProps {
    long: boolean;
}

export const DepthGraph = ({ long }: IDepthGraphProps) => {
    // listen to orderbook and new data to re-render
    const {
        state: { book },
        dispatch
    } = useOrderBook();

    const ref = useRef({} as HTMLCanvasElement);

    const items = long ? book.bids : book.asks;
    const sender = long
        ? EOrderBookSender.GraphAsks
        : EOrderBookSender.GraphBids;

    const events: ICanvasEvents = {
        onLoad: function () {
            onDrawDepth(ref, items);
        },
        onMouseMove: function (e: MouseEvent) {
            const { canvas } = getCanvasContext(ref);
            const { x } = getCanvasPos(canvas, e);

            const hover = onDrawDepth(ref, items, x);

            dispatch({
                cmd: EOrderBookAction.HoverEntry,
                sender,
                hover
            });
        }
    };

    // pure event handler
    const eventsMemo = useMemo(() => events, []);

    return (
        <Canvas
            id="depth-graph"
            height={400}
            width={200}
            canvasRef={ref}
            events={eventsMemo}
        />
    );
};
