import { h } from 'preact';
import { memo } from 'preact/compat';
import { useEffect } from 'preact/hooks';

// utils
import { getCanvasContext } from '@utils/canvas.utils';

// types
import { ICanvasPureComponent } from './Canvas.types';

// pure/functional component for canvas initalization without re-rendering
export const Canvas = memo(
    ({ id, canvasRef, height, width, events }: ICanvasPureComponent) => {
        // on canvas load
        useEffect(() => {
            const { ctx } = getCanvasContext(canvasRef);
            console.log('[canvas]: mounted', id);

            // fix anti-aliasing
            ctx.translate(0.5, 0.5);
            ctx.translate(-0.5, -0.5);

            // callback
            if (events?.onLoad) events.onLoad();
        });

        return (
            <canvas
                id={id}
                tabIndex={0}
                height={height}
                width={width}
                ref={canvasRef}
                {...events}
            />
        );
    },
    (prev, next) => {
        // memo only makes a shallow comparison of objects
        // hence 'onMouseMove' function will trigger a re-render everytime
        // but we're not sending in any dynamic changes hence a constant return
        return true;
    }
);
