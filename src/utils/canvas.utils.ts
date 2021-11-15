import { Ref } from 'preact/hooks';

/**
 * https://usefulangle.com/post/17/html5-canvas-drawing-1px-crisp-straight-lines
 * @param n
 */
export const lineY = (n: number) => {
    return Math.round(n) + 0.5;
};

/**
 * return canvas and 2d context from 'ref'
 * @param ref
 * @returns
 */
export const getCanvasContext = (ref: Ref<HTMLCanvasElement>) => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    return { canvas, ctx };
};

/**
 * get the position relative to the canvas
 * @param canvas
 * @param e
 * @returns
 */
export const getCanvasPos = (canvas: HTMLCanvasElement, e: MouseEvent) => {
    const r = canvas.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    return { x, y };
};
