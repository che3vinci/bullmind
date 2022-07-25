import { useCommit } from '@c3/hooks';
import { gComponentMap } from 'apps/client/src/bootstrap/gComponentMap';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ICanvasState } from '../../../../store/svgReducer';
import { RectModel } from '../Rect/Rect.model';

export const SVG: React.FC = () => {
  const commit = useCommit();
  const svg = useSelector((e: ICanvasState) => e.root);
  useEffect(() => {
    const m = new RectModel();
    commit('addChild', { id: svg.id, data: [m] });
  }, []);
  if (!svg) {
    return null;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id={svg.id}
      name="tkCanvas"
      width={1920}
      height={1020}
      fill="red"
      // transform: this._model.transformString,
      viewBox={`0,0,${1920},${1020}`}
    >
      {svg.children.map(c => {
        const comp = gComponentMap[c.cname];
        return comp && <comp.view key={c.id} model={c} />;
      })}
    </svg>
  );
};
