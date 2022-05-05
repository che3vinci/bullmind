import React, { useEffect, useRef } from 'react';
import { Rect } from '../../shapes/Rect/Rect.view';
import { useDrag, useResizeObserver } from '@c3/hooks';
import { assert } from '@c3/utils';
import { useState } from 'react';
import { useCallback } from 'react';

export type ResizerProps = {
  onResize: (dx: number, dy: number) => void;
  size: number;
};

const Resizer: React.FC<ResizerProps> = props => {
  const ref = useRef<SVGElement | null>(null);
  const { onResize, size, children } = props;
  const [, handler] = useDrag(e => onResize(e.movementX, e.movementY));
  const [box, setBox] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const onChange = useCallback(entry => {
    setBox(entry.contentRect);
    console.log(entry.contentRect);
  }, []);
  useResizeObserver(ref.current, onChange);

  const content = React.Children.only(children);
  assert(React.isValidElement(content));
  const x = 10;
  const y = 10;
  return (
    <g>
      <content.type
        ref={ref}
        {...content.props}
        key={content.key}
      ></content.type>
      <rect
        {...handler}
        x={x}
        y={y}
        width={size}
        height={size}
        fill="blue"
      />
      <rect
        {...handler}
        x={x}
        y={y}
        width={size}
        height={size}
        fill="blue"
      />
      <rect
        {...handler}
        x={x}
        y={y}
        width={size}
        height={size}
        fill="blue"
      />
      <rect
        {...handler}
        x={x}
        y={y}
        width={size}
        height={size}
        fill="blue"
      />
    </g>
  );
};

export default Resizer;
