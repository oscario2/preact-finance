import { h } from 'preact';
import { useEffect, useMemo, useRef } from 'preact/hooks';

// components
import { Canvas } from '@components/Canvas/Canvas';
import { ICanvasEvents } from '@components/Canvas/Canvas.types';
import { onDrawAxis } from './onDrawAxis';

// utils
import { getCanvasContext, getCanvasPos } from '@utils/canvas.utils';

// actions
import { useOrderBook } from '../../OrderBook.store';

// types
import {
    EOrderBookAction,
    EOrderBookSender,
    IOrderBookItem
} from '../../OrderBook.types';

// styles
import './Axis.module.scss';

export interface IAxisGraphProps {
    long: boolean;
}

export const AxisGraph = ({ long }: IAxisGraphProps) => {
    const { state, dispatch } = useOrderBook();

    const ref = useRef({} as HTMLCanvasElement);
    const items = long ? state.book.bids : state.book.asks;
    const context = long
        ? EOrderBookSender.GraphAsks
        : EOrderBookSender.GraphBids;

    // TODO: this is fired twice by each sender, a total of 4

    // run on 'state' change
    useEffect(() => {
        // this 'context' didn't trigger state change
        if (state.sender !== context) {
            // hover should be mirrored as 'hover' is not from this axis
            if (state.hover.long !== long) {
                onDrawAxis(ref, items, 0, state.hover, true);
            }

            // hover should not be mirrored as 'hover' is from this axis
            else if (state.hover.long == long) {
                onDrawAxis(ref, items, 0, state.hover, false);
            }
        }
    }, [state.hover]);

    const events: ICanvasEvents = {
        onLoad: function () {
            onDrawAxis(ref, items);
        },
        onMouseMove: function (e: MouseEvent) {
            const { canvas } = getCanvasContext(ref);
            const { y } = getCanvasPos(canvas, e);

            // highlight in axis
            const hover = onDrawAxis(ref, items, y);

            // dispatch our 'hover' to orderbook and to opposite axis
            dispatch({
                cmd: EOrderBookAction.HoverEntry,
                sender: context,
                hover
            });
        }
    };

    // pure event handler
    const eventsMemo = useMemo(() => events, []);

    return (
        <Canvas
            id="depth-axis"
            height={400}
            width={200}
            canvasRef={ref}
            events={eventsMemo}
        />
    );
};
