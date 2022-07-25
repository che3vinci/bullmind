import produce from 'immer';
import { SVGModel } from 'apps/client/src/views/components/shapes/Svg';
import { Reducer } from 'react';
import { SVG_ROOT_ID } from './constants';
import { assert, IDable } from '@c3/utils';


export type ICanvasState = {
  root: SVGModel
};
export const canvasDefaultState: ICanvasState = {
  root: new SVGModel(),
};


const svgReducer: Reducer<ICanvasState, IModelAction> = produce(
  (draft: ICanvasState, { type, payload }: IModelAction) => {
    if (!payload) {
      return;
    }
    const { id, data = [] } = payload;
    if (id === draft.root.id) {
      (draft.root as any)[type](...data);
    } else {
      const model = draft.root.find((c: IDable) => c.id === id);
      assert(
        !!model && type in model,
        `Model ${id} not found or method '${type}' did not existed`, model
      );
      (model as any)[type].call(model, ...data);
    }
  },
  canvasDefaultState
);

export default svgReducer;
