import { h } from 'preact';
import { useMemo, useRef } from 'preact/hooks';

// components
import { Canvas } from '@components/Canvas/Canvas';
import { onDrawCandle } from './graphs/onDrawCandle';

// utils
import { getCanvasContext, getCanvasPos } from '@utils/canvas.utils';

// types
import { ICanvasEvents } from '../Canvas/Canvas.types';
import { ICanvasDraw, IChartState } from './MarketGraph.types';
import { IMarketItem } from 'src/types/data.types';

export interface IMarketChartProps {
    items: IMarketItem[];
}

export const MarketChart = ({ items }: IMarketChartProps) => {
    const ref = useRef({} as HTMLCanvasElement);

    const state: IChartState = {
        drawHistory: [] as ICanvasDraw[],
        drawActive: {} as ICanvasDraw,

        history: 0,
        zoom: 0
    };

    const drawChart = (x: number = 0, y: number = 0) => {
        onDrawCandle(ref, state, items.slice(state.zoom), x, y);
    };

    const events: ICanvasEvents = {
        onLoad: function () {
            drawChart();
        },

        onMouseMove: function (e: MouseEvent) {
            const { canvas } = getCanvasContext(ref);
            const { x, y } = getCanvasPos(canvas, e);

            drawChart(x, y);
        },

        onMouseDown: function (e: MouseEvent) {
            const { canvas } = getCanvasContext(ref);
            const { x, y } = getCanvasPos(canvas, e);

            state.drawActive = {
                ...state.drawActive,
                active: true,
                hidden: false,
                start: { x, y },
                end: { x: 0, y: 0 }
            };
        },

        onMouseUp: function (e: MouseEvent) {
            const { canvas } = getCanvasContext(ref);
            const { x, y } = getCanvasPos(canvas, e);

            state.drawActive = {
                ...state.drawActive,
                active: false,
                end: { x, y }
            };

            state.drawHistory.push(state.drawActive);
            state.history = state.drawHistory.length - 1;
        },

        onWheel: function (e: WheelEvent) {
            e.preventDefault();

            const speed = 2;
            state.zoom += e.deltaY < 0 ? speed : -speed;

            const min = 0;
            const max = items.length - 5;

            // sanity check
            if (state.zoom < min) state.zoom = min;
            else if (state.zoom > max) state.zoom = max;

            drawChart();
        },

        onKeyDown: function (e: KeyboardEvent) {
            if (!e.ctrlKey) return;

            const { history } = state;
            const max = state.drawHistory.length - 1;

            switch (e.key) {
                case 'z':
                    if (history >= 0) {
                        state.drawHistory[state.history--].hidden = true;
                        state.history = history == 0 ? 0 : history - 1;
                    }
                    break;

                case 'y':
                    if (history <= max) {
                        state.drawHistory[state.history++].hidden = false;
                        state.history = history == max ? max : history + 1;
                    }
                    break;
            }

            drawChart();
        }
    };

    // pure event handler
    const eventsMemo = useMemo(() => events, []);

    return (
        <Canvas
            id="candle-chart"
            height={300}
            width={600}
            canvasRef={ref}
            events={eventsMemo}
        />
    );
};
