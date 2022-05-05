import { useResize } from '@src/core/action/resize/useResize';
import React from 'react';
import { useDrag } from '../../../../core/action/drag/useDrag';
import Resizer from '../../tips/Resizer';
import { RectModel } from './Rect.model';

export const Rect: React.FC<IModelProps<RectModel>> = ({ model }) => {
  const drag = useDrag(model.id);
  const resize = useResize(model.id);
  return (
    <Resizer onResize={resize} size={20}>
      <rect
        id={model.id}
        x={model.x}
        y={model.y}
        width={model.width}
        height={model.height}
        transform={model.transform.toString()}
        {...drag}
      />
    </Resizer>
  );
};
