import { Ref } from 'preact/hooks';

export interface ICanvasEvents {
    onLoad?(): void;
    onMouseMove?(e: MouseEvent): void;
    onMouseDown?(e: MouseEvent): void;
    onMouseUp?(e: MouseEvent): void;
    onKeyDown?(e: KeyboardEvent): void;
    onWheel?(e: WheelEvent): void;
}

export interface ICanvasPureComponent {
    id: string;
    canvasRef: Ref<HTMLCanvasElement>;
    height?: number;
    width?: number;
    events?: ICanvasEvents;
}
