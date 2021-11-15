export interface ICanvasDraw {
    /**
     * actively being drawn
     */
    active: boolean;

    /**
     * hidden in canvas
     */
    hidden: boolean;

    /**
     * start coordinates of mousedown
     */
    start: { x: number; y: number };

    /**
     * end coordinates of mouseup
     */
    end: { x: number; y: number };
}

export interface IChartState {
    /**
     * state of current drawing session
     */
    drawActive: ICanvasDraw;

    /**
     * all drawn boxes on our canvas
     */
    drawHistory: ICanvasDraw[];

    /**
     * current index/history of 'drawn'
     */
    history: number;

    /**
     * current zoom, index of .slice(0, zoom)
     */
    zoom: number;
}
