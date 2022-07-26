import React, { useEffect, useMemo, useRef } from 'react';
import { Rect } from '../../shapes/Rect/Rect.view';
import {
  useBoundingClientReact,
  useDrag,
  useIntersectionObserver,
  useResizeObserver,
} from '@c3/hooks';
import { assert, IBox } from '@c3/utils';
import { useState } from 'react';
import { useCallback } from 'react';
import Box from '@src/core/boxable/box';
import { useMutationObserver } from '@c3/hooks';

export type ResizerProps = {
  onResize: (dx: number, dy: number) => void;
};

const Resizer: React.FC<ResizerProps> = props => {
  const ref = useRef<SVGElement | null>(null);
  const { onResize, children } = props;
  const [, handler] = useDrag(e => onResize(e.movementX, e.movementY));
  const [box, setBox] = useState(new Box(0, 0, 0, 0));

  const content = React.Children.only(children);
  assert(React.isValidElement(content));

  const onChange = useCallback(entry => {
    setBox(Box.makeFromDomRect(entry[0].target.getBoundingClientRect()));
  }, []);
  useMutationObserver(ref.current, onChange, { attributes: true });
  const size = 10;
  return (
    <>
      <content.type ref={ref} {...content.props} key={content.key} />
      {box.corners.map((corner, idx) => {
        return (
          <rect
            {...handler}
            {...Box.makeFromCenter(corner, size, size).iBox}
            fill="blue"
            key={idx}
            style={{ cursor: 'pointer' }}
          />
        );
      })}
    </>
  );
};

export default Resizer;
