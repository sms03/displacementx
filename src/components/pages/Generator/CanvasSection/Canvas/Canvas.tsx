import clsx from 'clsx';
import {forwardRef} from 'react';

type CanvasProps = {
  readonly width: number;
  readonly height: number;
  readonly isRendering: boolean;
};

export const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({width, height, isRendering}, forwardedRef) => (
    <div
      className={clsx(
        'relative flex aspect-square w-full max-w-xl items-center justify-center border border-dashed',
        isRendering ? 'border-pink' : 'border-white',
      )}
    >
      <canvas
        ref={forwardedRef}
        className='absolute inset-0 max-h-full max-w-full'
        width={width}
        height={height}
      >
        <span className='absolute inset-0 flex items-center justify-center p-2 text-center text-sm'>
          HTML canvas is not supported in this browser
        </span>
      </canvas>
      <div
        className={clsx(
          'absolute flex h-full w-full items-center justify-center bg-black/50 text-lg text-pink uppercase',
          !isRendering && 'hidden',
        )}
      >
        Rendering
      </div>
    </div>
  ),
);

Canvas.displayName = 'Canvas';
