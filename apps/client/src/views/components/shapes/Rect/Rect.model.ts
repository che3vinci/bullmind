import { withFill } from '@src/core/action/fill';
import { withDragAsTranslate } from '@src/core/action/drag';
import { doResize } from '@src/core/action/resize';
import { DEAULT_SHAPE_STATUS } from '@src/core/status/status';
import { widthId, Id, withName } from '@src/core/id/index';
import Transform from '@src/core/transform/transform';
import { Hydratable } from '@src/core/jsonable';
class BaseRectModel  {
  transform = new Transform();
  status = DEAULT_SHAPE_STATUS;
  _id = new Id();

  constructor(
    public x = 0,
    public y = 0,
    public width = 100,
    public height = 100,
    public rx = 0,
    public ry = 0
  ) {}
  // hydrate(data: this) {
  //   this._id.hydrate(data._id);
  //   this.transform.hydrate(data.transform);
  // }
}

export const RectModel = doResize(
  withFill(widthId(withDragAsTranslate(withName(BaseRectModel, 'rect'))))
);

export type RectModel = InstanceType<typeof RectModel>;
